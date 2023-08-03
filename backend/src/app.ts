import express = require('express');
import accountRouter from './routers/account.router';

class App {
	public app: express.Express;

	constructor(
			private account = accountRouter,
	) {
		this.app = express();
	
		this.config();
	
		this.app.get('/health', (_req, res) => res.status(200).send('API no ar!'));
		this.app.get('/', (req, res) => res.json({ ok: true }));
		this.app.use('/account', this.account);
	}

	private config():void {
		const accessControl: express.RequestHandler = (_req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
			res.header('Access-Control-Allow-Headers', '*');
			next();
		};

		this.app.use(express.json());
		this.app.use(accessControl);
	}

	public start(PORT: string | number):void {
		this.app.listen(PORT, () => console.log(`API no ar na porta ${PORT}!`));
	}
}

export default App;
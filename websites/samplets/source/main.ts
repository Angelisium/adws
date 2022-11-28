import type { MongoDriver } from '@mikro-orm/mongodb';
import express, { Application } from 'express';
import { MikroORM } from '@mikro-orm/core';

/*##############################################################################
# Routes & Middleware                                                          #
##############################################################################*/
import { middleware as AuthenticationMiddleware } from './hook/Authentication';
import { route as IndexController } from './route/index';

enum NodeEnv {
	Production = "production",
	Development = "development",
}

const ENV_KEY: string[] = ["NODE_ENV", "HTTP_PORT", "MONGO_DB_NAME", "MONGO_DB_URL"];
interface Environment {
	NODE_ENV: NodeEnv,
	HTTP_PORT: number,
	MONGO_DB_NAME: string,
	MONGO_DB_URL: string
}

async function main() {
	let app: Application = express(),
		orm: MikroORM<MongoDriver> = await MikroORM.init<MongoDriver>({
			entities: ['./release/entity'],
			entitiesTs: ['./source/entity'],
			dbName: config.MONGO_DB_NAME,
			clientUrl: config.MONGO_DB_URL,
			type: 'mongo',
		});

	app.use(express.static('public'));

	/* Routes & Middleware */
	app.use(AuthenticationMiddleware);
	app.get('/', IndexController);

	app.listen(config.HTTP_PORT, function() {
		console.log("Server listening on port " + config.HTTP_PORT);
	});
}

function init_config() {
	let config = {};
	for(let varName of ENV_KEY) {
		if(process.env[varName]) {
			// @ts-ignore
			config[varName] = process.env[varName];
		} else {
			throw "Unknown environment variable" + varName;
		}
	}
	return config as Environment;
}

export const config: Environment = init_config();
main();
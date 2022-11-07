import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.use(express.static('public'));
app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send("Root route is working");
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
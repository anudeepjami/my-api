import express, { Request, Response, Application } from 'express';
import cors from 'cors';

const app: Application = express();

//adding cors whitelist urls
const urls = {
    origin: ["http://localhost:3000","https://anudeepjami.com"],
  };

app.use(cors(urls));

// JSON parsing in built
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//API routes
import routes from './routes';
app.use('/api/v1', routes);

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
    res.send("Welcome to Anudeep Jami's API")
});

app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});

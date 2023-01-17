import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getAllNews, turnOnOffDisplay, getSingleNews, addNewNews } from "./controllers/home.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/getallnews', getAllNews);
app.get('/getspecificnews/:id', getSingleNews);
app.post('/turnonoffdisplay/:id', turnOnOffDisplay);
app.post('/addnewnews', addNewNews);

app.get('/', (req, res) => {
	res.json({ message: "running!" });
});

app.listen('5000', () => {
	console.log('APP IS RUNNING');
});

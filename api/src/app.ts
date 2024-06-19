import express from 'express';
import dotenv from 'dotenv';
import router from './routers/tasksRouter';

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

export default app;

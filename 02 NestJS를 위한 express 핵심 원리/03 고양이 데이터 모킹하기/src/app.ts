import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.get('/cats/blue', (req, res) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat, blue: Cat[0] });
});

app.get('/cats/som', (req, res, next) => {
  console.log(req.rawHeaders[1]);
  res.send({ som: Cat[1] });
  next();
});

app.use((req, res, next) => {
  console.log('this is logging middleware');
  res.send({ error: '404 not found error' });
});

app.listen(8000, () => {
  console.log('server is on...');
});

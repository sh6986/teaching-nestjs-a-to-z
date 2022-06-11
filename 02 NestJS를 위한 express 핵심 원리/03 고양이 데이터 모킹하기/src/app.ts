import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log('this is logging middleware');
  next();
});

//* json middleware
app.use(express.json());

//* READ 고양이 전체 데이터 다 조회
app.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

//* READ 특정 고양이 데이터 조회
app.get('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => {
      return (cat.id = params.id);
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

//* CREATE 새로운 고양이 추가 api
app.post('/cats', (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);

    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

//* 404 middleware
app.use((req, res, next) => {
  console.log('this is logging middleware');
  res.send({ error: '404 not found error' });
});

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.listen(8000, () => {
  console.log('server is on...');
});

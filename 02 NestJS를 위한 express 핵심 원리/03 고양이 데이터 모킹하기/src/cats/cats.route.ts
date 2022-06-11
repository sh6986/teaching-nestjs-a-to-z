import { Cat, CatType } from './cats.model';
import { Router } from 'express';

const router = Router();

//* READ 고양이 전체 데이터 다 조회
router.get('/cats', (req, res) => {
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
router.get('/cats/:id', (req, res) => {
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
router.post('/cats', (req, res) => {
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

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });

    const cat = Cat.find((cat) => {
      return (cat.id = params.id);
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });

    const cat = Cat.find((cat) => {
      return (cat.id = params.id);
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);

    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

export default router;

import express from 'express';
import factory from './routeFactory'


const router = express.Router();

router.get('/', factory.helloAll);
router.get('/:name', factory.helloOne);

export default router;


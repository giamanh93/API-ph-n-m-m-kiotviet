'use strict';

import express from 'express';
import {requestLogin, requestNotLogin} from './middlewares/Authentication';
import * as ProductionTypeController from './controllers/ProductionTypeController';
import * as CustomerController from './controllers/CustomerController';
import * as ProducerController from './controllers/ProducerController';
import * as ProductController from './controllers/ProductController';
import * as OrderController from './controllers/OrderController';
import * as ItemController from './controllers/ItemController';
import * as UserController from './controllers/UserController';

const router = express.Router();

router.get('/production-type', requestLogin(), ProductionTypeController.list); // getlist
router.get('/production-type/:id', requestLogin(), ProductionTypeController.info); // detail
router.post('/production-type', requestLogin(), ProductionTypeController.add); // insert
router.put('/production-type/:id', requestLogin(), ProductionTypeController.update); // update
router.delete('/production-type/:id', requestLogin(), ProductionTypeController.remove); // delete

router.get('/customer', requestLogin(), CustomerController.list); // getlist
router.get('/customer/:id', requestLogin(), CustomerController.info); // detail
router.post('/customer', requestLogin(), CustomerController.add); // insert
router.put('/customer/:id', requestLogin(), CustomerController.update); // update
router.delete('/customer/clear', requestLogin(), CustomerController.clear); // delete
router.delete('/customer/:id', requestLogin(), CustomerController.remove); // delete

router.get('/producer', requestLogin(), ProducerController.list); // getlist
router.get('/producer/:id', requestLogin(), ProducerController.info); // detail
router.post('/producer', requestLogin(), ProducerController.add); // insert
router.put('/producer/:id', requestLogin(), ProducerController.update); // update
router.delete('/producer/:id', requestLogin(), ProducerController.remove); // delete

router.get('/product', requestLogin(), ProductController.list); // getlist
router.get('/product/:id', requestLogin(), ProductController.info); // detail
router.post('/product', requestLogin(), ProductController.add); // insert
router.put('/product/:id', requestLogin(), ProductController.update); // update
router.delete('/product/clear', requestLogin(), ProductController.clear); // delete
router.delete('/product/:id', requestLogin(), ProductController.remove); // delete

router.get('/order', requestLogin(), OrderController.list); // getlist
router.get('/order/:id', requestLogin(), OrderController.info); // detail
router.post('/order', requestLogin(), OrderController.add); // insert
router.put('/order/:id', requestLogin(), OrderController.update); // update
router.delete('/order/clear', requestLogin(), OrderController.clear); // update
router.delete('/order/:id', requestLogin(), OrderController.remove); // delete

router.get('/item', requestLogin(), ItemController.list); // getlist
router.get('/item/:id', requestLogin(), ItemController.info); // detail
router.post('/item', requestLogin(), ItemController.add); // insert
router.put('/item/:id', requestLogin(), ItemController.update); // update
router.delete('/item/clear', requestLogin(), ItemController.clear); // update
router.delete('/item/:id', requestLogin(), ItemController.remove); // delete

router.post('/user/login', requestNotLogin(), UserController.login); // update
router.get('/user/logout', UserController.logout); // update
router.get('/user', requestNotLogin(), UserController.list); // getlist
router.get('/user/info', requestNotLogin(), UserController.info); // detail
// router.post('/user/update', UserController.add); // update
// router.post('/user', requestNotLogin(),  UserController.add); // insert
// router.put('/user/:id', requestLogin(), UserController.update); // update
// router.delete('/user/clear', UserController.clear); // update
// router.delete('/user/:id', requestLogin(), UserController.remove); // delete

export default router;
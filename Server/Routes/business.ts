// File Name : business.ts
// Student's Name : Yerim Cho
// Student ID : 301143325
// Date : June 18th, 2021

import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type business controller
import { DisplayAddPage, DisplayBusinessListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/business';

// import Util functions
import { AuthGuard } from '../Util/index';

/* GET /business-list page. */
router.get('/', DisplayBusinessListPage);

/* GET - display /business-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

/* GET - display /business-list/edit/:id page. */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* POST - process /business-list/add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /business-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /business-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);
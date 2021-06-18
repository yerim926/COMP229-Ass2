// File Name : index.ts
// Student's Name : Yerim Cho
// Student ID : 301143325
// Date : June 18th, 2021

import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

// GET - Add Login Display 
router.get('/login', DisplayLoginPage);

// POST- process Login Page when user clicks login page
router.post('/login', ProcessLoginPage);

// GET - Add Register Display 
router.get('/register', DisplayRegisterPage);

// POST - process register Page when user clicks register page
router.post('/register', ProcessRegisterPage);

// GET - Add Logout Display 
router.get('/logout', ProcessLogoutPage);

//module.exports = router;

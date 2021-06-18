import express, { Request, Response, NextFunction } from 'express';

import passport from 'passport';

//create an instance of the USer model
import User from '../Models/user';

// Display Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Me', page: 'about'  });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Projects', page: 'projects'  });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Services', page: 'services'  });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact', page: 'contact'  });
}

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage')  });
    }
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{

}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{

}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{

}
export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{

}
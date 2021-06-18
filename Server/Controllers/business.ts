import express, { Request, Response, NextFunction } from 'express';

import Business from "../Models/business";


// Display Functions

//read in CRUD
export function DisplayBusinessListPage(req: Request, res: Response, next: NextFunction): void
{
    //mongo db - find method to return all the business collection
    Business.find(function(err,businessCollection){
        if(err)
        {
            return console.error(err);
        }

        // (Read) print out the business list
        // console.log(business);

        //render the business-list content partial page
        res.render('index', {title: 'Business Contact List', page: 'business-list', business: businessCollection})
    });
}

//Display Edit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction):void
{
    let id = req.params.id;

    //console.log(id);

    // pass the id to the db 

    //db.business.find({"_id": id})
    Business.findById(id,{},{},(err, businessContactToEdit) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //show the edit view
        res.render('index',{title: 'Edit', page: 'update', business: businessContactToEdit})
    });
}


// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', business: '' });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Business Item
    let updatedBusinessContact = new Business
    ({
      "_id": id,
      "name": req.body.name,
      "phone": req.body.phone,
      "email": req.body.email,
    });
  
    // find the business item via db.business.update({"_id":id}) and then update
    Business.updateOne({_id: id}, updatedBusinessContact, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/business-list');
    });
}


// Process (C)reate page
// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Business
  let newContact = new Business
  ({
      "name": req.body.name,
      "phone": req.body.phone,
      "email": req.body.email,
  });

  // db.business.insert({})
  Business.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/business-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.business.remove({"_id: id"})
  Business.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/business-list');
  });
}
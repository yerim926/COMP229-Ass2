// File Name : app.ts
// Student's Name : Yerim Cho
// Student ID : 301143325
// Date : June 18th, 2021


//IIFE
"use strict";

(function(){

    function confirmDelete()
    {
      // confirm deletion
      // jquery
      $("a.delete").on("click", function(event){
        if(!confirm("Are you sure?"))
        {
          event.preventDefault();
          location.href = '/business-list';
        }       
      });
    }

    function Start():void
    {
        console.log("App Started");
        
        confirmDelete();  
    }

    window.addEventListener("load", Start);

})();

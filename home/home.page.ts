import { Component } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users = [
    { id: 1, name: "vinay", city: "banglore", age: 21 },
    { id: 2, name: "sanjay", city: "chennai", age: 22 },
    { id: 3, name: "vinod", city: "mumbai", age: 34 },
    { id: 4, name: "mahesh", city: "pune", age: 30 },
    { id: 5, name: "dinesh", city: "pune", age: 24 },
    { id: 6, name: "mohan", city: "banglore", age: 21 },
    { id: 7, name: "priya", city: "chennai", age: 22 },
    { id: 8, name: "moni", city: "mumbai", age: 34 },
    { id: 9, name: "madhu", city: "pune", age: 30 },
    { id: 10, name: "vinod", city: "banglore", age: 24 }
  ];
 

  constructor() { }

  input= "";
  input1= "";
  showname() {
    
   this.users.filter (
      (item) => {
        if(item.name == this.input)
       console.log(item.name,item.age,item.city)   
        
      }
    )
  }
  showcity() {
    
    this.users.filter (
       (item) => {
         if(item.city == this.input1)
        console.log(item.name,item.age,item.city)   
         
       }
     )
   }
  alertDetail(name, city, age) {

    let alertt = `${age} years old ${name} is from ${city}`
    alert(alertt);
  }


}

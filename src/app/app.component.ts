import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is a test';  


  constructor() {
    console.log("I'm the constructor");

    this.sayHello('Victor');
  }

  sayHello(name) {
    console.log("I'm a function");
    console.log(name);

    return 42;
  }


test () {
  console.log("i will change the var");

  this.title = 'My value was changed on the logic of the comp';

  /* Strong Types */
    var name = 'Victor';


  /* varName : type = value; */

    var age = 25;

    console.log(name);
    console.log(age);
    

    


  }
}
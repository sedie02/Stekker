import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stekker';


  constructor(private http:HttpClient){

  }
   updateData(value: any, value2: any){
    let url = "http://localh2-env.eba-rpvpzjqz.eu-central-1.elasticbeanstalk.com/plug/48551917CE6C";
    let url2 = "https://jsonplaceholder.typicode.com/todos/1";
    var username = value;
    var password = value2;
    var login = username + ":" + password;
    console.log(login);
    var getData;

    const options : Object = {
      Headers: new HttpHeaders({
        "content-type": "application/json",
        Authorization: "Basic" + btoa(login)
      }),
    }

    this.http.get(url, options).subscribe((data) =>{
      getData = data;
      console.log(getData);

    });

  
  
  
  }
}





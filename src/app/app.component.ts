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
  webData : any;

  constructor(private http:HttpClient){
    var getData;
  }
   updateData(value: any, value2: any){
    let url = "http://localh2-env.eba-rpvpzjqz.eu-central-1.elasticbeanstalk.com/plug/48551917CE6C";
    var username = value;
    var password = value2;
    var login = "Basic " + btoa((username + ":" + password).toString());
    var getData;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/xml',
        'Authorization': login
      })
    };

    this.http.get(url, httpOptions).subscribe((data) =>{
      
      this.webData = data;
      console.log(this.webData);

    });
    


  
  
  
  }
}





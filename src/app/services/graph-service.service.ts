import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {

  category=[];
  views=[];
  id=[];                                                                                                                                                                                                       
  chart = [];
  title=[];
  constructor(private http:HttpClient) { }

  getTrending(category):any{
    this.views=[];
    this.title=[];
    this.id=[];
    this.chart=[];
    let _url = `http://newszoid.stackroute.io:8093/content-service/api/v1/posts/trending/${category}`;

    
    this.http.get(_url).subscribe((res:any)=>{
      res.forEach(y => {

        this.views.push(y['watchedBy'].length);
        this.id.push(y.id);
        this.title.push(y.title);
    });
      this.chart.push(new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.title,
        datasets: [
          {
            data: this.views,
            borderColor: '#3cba9f',  
            backgroundColor: [  
              "#3cb371",  
              "#0000FF",  
              "#9966FF",    
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF",  
              "Blue",  
              "Red",  
              "Blue"  
            ], 
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero:true,
              min: 0,
              max: 10,
              stepSize:1
            }
          }],
        }
      }
    }));
  });
  }



  getBarChart(){
    this.views=[];
    this.title=[];
    this.id=[];
    this.chart=[];
    this.category=[];
    let url = 'http://newszoid.stackroute.io:8093/content-service/api/v1/posts/trending';
    this.http.get(url).subscribe((res:any)=>{
      res.forEach(y => {
        this.category.push(y.category);
        this.views.push(y['watchedBy'].length);
        this.id.push(y.id);
    });
      this.chart.push(new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.category,
        datasets: [
          {
            borderColor: '#3cba9f', 
            data: this.views,
 
            backgroundColor: [  
              "#3cb371",  
              "#0000FF",  
              "#9966FF",    
              "#00FFFF",  
              "#f990a7",  
              "#aad2ed",  
              "#FF00FF",  
              "Blue",  
              "Red",  
              "Blue"  
            ], 
            
            
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero:true,
              min: 0,
              max: 10,
              stepSize:1
          }
      }]
        }
      }
    }));
  });
}

  
}

import {Component, EventEmitter, Input, OnInit, Output, Inject} from '@angular/core';
import {Subscription} from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {UploadComponent} from '../upload/upload.component';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-posted',
  templateUrl: './edit-posted.component.html',
  styleUrls: ['./edit-posted.component.css']
})
export class EditPostedComponent implements OnInit {

 id: number;
 title: string;
 category: string;
 location: string;
 videoUrl: string;
 response: any;
 post: any;
 locations = environment.locations;

 categories = ['National', 'International',
   'Business', 'Technology', 'Entertainment',
   'Sports', 'Science', 'Health'];

 constructor(public dialog: MatDialog,
              private http: HttpClient,
              private router: Router,
              private dialogRef: MatDialogRef<EditPostedComponent>,
              @Inject(MAT_DIALOG_DATA) data) { 
                this.id = data.id;
                this.title = data.title;
                this.category = data.category;
                this.location = data.location;
                this.videoUrl = data.videoUrl;
              }

 ngOnInit() { 
 }

 addPost(input: NgForm) {
   const username = localStorage.getItem('username');
   this.post = {
     id: this.id,
     title: input.value.title,
     category: input.value.category,
     location: input.value.location,
     videoUrl: this.videoUrl,
     // tags: tags,
     postedBy: {
       username: username
     }
   };
   console.log(this.post);
   const httpOptions = {
     headers: new HttpHeaders(
       {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + localStorage.getItem('jwt')
       })
   };
   this.http.put(environment.uploadPostUrl, this.post, httpOptions).subscribe(data => {
     this.router.navigateByUrl('/404').then((dat) => {
       this.router.navigateByUrl('/posted');
     });
   });
 }
}


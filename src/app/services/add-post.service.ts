import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostPayload } from '../components/add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient:HttpClient) {

  }


  addPost(postPayload:PostPayload){
    
    return this.httpClient.post('http://localhost:8090/publication',postPayload);
  }

  getAllPosts():Observable<Array<PostPayload>>{
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8090/publication/all");
  }


  getPost(permaLink:Number):Observable<PostPayload>{
    return this.httpClient.get<PostPayload>('http://localhost:8090/publication/get/'+ permaLink);
  }



}

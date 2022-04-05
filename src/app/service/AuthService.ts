import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Student } from '../studentUser';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private baseUrl = "http://localhost:8080/student/login";

    constructor(private http: HttpClient){}

    login(student: Student):Observable<object> {
        return this.http.post(`${this.baseUrl}` , student,{headers:{
            'Access-Control-Allow-Origin': '*'
        } } );
      }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../studentUser";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private baseUrl = "http://localhost:8080/student/getDetail"
    private editUrl = "http://localhost:8080/student/saveEdit"
    private courseUrl = "http://localhost:8080/student/getCourses"
    constructor(private http: HttpClient){}
    
    getDetail(userId:string):Observable<object> {
        return this.http.post(`${this.baseUrl}` , userId,{headers:{
            'Access-Control-Allow-Origin': '*'
        } } );
      }

    saveEdit(student:Student):Observable<object>{
        return this.http.post(`${this.editUrl}`, student,{headers:{
            'Access-Control-Allow-Origin': '*'
        }});
    }

    getUserCourses(userId:String):Observable<object>{
        return this.http.post(`${this.courseUrl}`, userId,{headers:{
            'Access-Control-Allow-Origin': '*'
        }});
    }
}
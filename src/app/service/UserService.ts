import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private baseUrl = "http://localhost:8080/student/getDetail"

    constructor(private http: HttpClient){}
    
    getDetail(userId:string):Observable<object> {
        return this.http.post(`${this.baseUrl}` , userId,{headers:{
            'Access-Control-Allow-Origin': '*'
        } } );
      }
}
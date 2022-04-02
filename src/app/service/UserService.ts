import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../studentUser";
import { GridReadyEvent } from 'ag-grid-community';
import { DatePipe } from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private baseUrl = "http://localhost:8080/student/getDetail"
    private editUrl = "http://localhost:8080/student/saveEdit"
    private courseUrl = "http://localhost:8080/student/getCourses"
    private deleteCourseUrl = "http://localhost:8080/student/deleteCourse"
    date=new Date();

    constructor(private http: HttpClient , public datepipe: DatePipe){}
    
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

    onDeleteCourse(params: any ,userId:String ){
        let currentDate = this.datepipe.transform(this.date, 'yyyy-MM-dd');
        let courseId = params.id;
        // If the course has already started
        if(currentDate>params.startDate){
               alert("The course has already started and can not be canceled")
               return null;
        }
         
        return this.http.post(`${this.deleteCourseUrl}`, {courseId,userId},{headers:{
            'Access-Control-Allow-Origin': '*'
        }}); 
    }
}
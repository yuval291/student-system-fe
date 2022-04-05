import { Component, OnInit , ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { UserService } from '../service/UserService';
import { ButtonRendererComponent } from './ButtonRendererComponent.component';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  private gridApi!: GridApi;
  @ViewChild("agGrid", {static:false}) agGrid: AgGridAngular;
  frameworkComponents: any;
  rowData : any;
  columnDefs : any;
  studentId: String;
  

  constructor(private userService:UserService ,private route:ActivatedRoute) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
   }

  ngOnInit(): void {
  }

  onGridReady(params: GridReadyEvent) {
    this.columnDefs = this.initColumn();

    this.gridApi = params.api;
    params.api.sizeColumnsToFit();  
    

    this.studentId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserCourses(this.studentId).subscribe((data)=>{
      this.rowData=data;
    })
  }

  initColumn(){
    return [
      {headerName: "Grade" , field: "grade" , sortable: true , filter:true ,maxWidth:450,minWidth:320},
      {headerName: "Course Name" , field: "courseName", sortable: true, filter:true,maxWidth:450,minWidth:320},
      {headerName: "Course Number" , field: "id", sortable: true, filter:true,maxWidth:450,minWidth:320},
      {headerName: "Start Date" , field: "startDate", sortable: true, filter:true,maxWidth:450,minWidth:320},
      {headerName: "End Date" , field: "endDate", sortable: true, filter:true,maxWidth:450,minWidth:320},
      {headerName: "Delete" , cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.onDeleteCourse.bind(this),
      label: 'Delete'},width: 90, minWidth: 50, maxWidth: 100}
    ];
  }

  onDeleteCourse(params){
    this.studentId = this.route.snapshot.paramMap.get('id');
    try{
      this.userService.onDeleteCourse(params.data,this.studentId).subscribe((data)=>{
    });

    this.gridApi.updateRowData({remove: [params.data]});
    alert(" Deleted successfully")
    } catch(e){
      alert(e)
    } 
  }

}

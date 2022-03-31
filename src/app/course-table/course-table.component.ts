import { Component, OnInit , ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { UserService } from '../service/UserService';
import { Student } from '../studentUser';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  private gridApi!: GridApi;

  @ViewChild("agGrid", {static:false}) agGrid: AgGridAngular;
  rowData : any;
  studentId: String;

  columnDefs = [
    {headerName: "Grade" , field: "grade" , sortable: true , filter:true },
    {headerName: "Course Name" , field: "courseName", sortable: true, filter:true},
    {headerName: "id" , field: "id", sortable: true, filter:true},
    {headerName: "Start Date" , field: "startDate", sortable: true, filter:true},
    {headerName: "End Date" , field: "endDate", sortable: true, filter:true}
  ];
  

  constructor(private userService:UserService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  // getSelectedRows(){
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map(node => node.data);
  //   const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(",");
  //   alert(`Selected Nodes: ${selectedDataStringPresentation}`)
  // }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();

    this.studentId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserCourses(this.studentId).subscribe((data)=>{
      console.log("data"+data)
      this.rowData=data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/UserService';
import { Student } from '../studentUser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  studentId: string;
  student: Student;
  editMode=false;

  constructor(private route:ActivatedRoute, private userService:UserService , private router: Router) {
   }

  ngOnInit(): void {
    //Takes the userId from what URL
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.getDetail(this.studentId)
    console.log(this.student)
  }

  getDetail(userId: string){
    this.userService.getDetail(userId).subscribe((dataStudent:Student) => {
      this.student = dataStudent;
    });
  }

  toggleEditMode(){
    //this.router.navigate(['edit',this.studentId]);
    this.editMode=!this.editMode
  }
}

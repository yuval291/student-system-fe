import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { NgForm, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/UserService';
import { Student } from '../studentUser';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() student: Student;
  editStudent : Student = new Student() ;
  cancel : boolean = false; 
  editMode : boolean = false;
  @Output() event= new EventEmitter<boolean>();

  userData={
    firstName: "",
    lastName: "",
    email: "",
    id:"",
    password:""
  }

  constructor(private userService : UserService , private router: Router) { 
   }

  ngOnInit(): void {
    // Initializes the input to the student's data
    this.userData.firstName=this.student.first_name;
    this.userData.lastName=this.student.last_name;
    this.userData.email=this.student.email;
    this.userData.id=this.student.userId;
    this.userData.password=this.student.password;
  }

  onSave(form: NgForm){
    this.editStudent.first_name= form.value.firstName;
    this.editStudent.last_name= form.value.lastName;
    this.editStudent.email= form.value.email;
    this.editStudent.userId = this.student.userId;
    this.editStudent.password = form.value.password;
     
    this.userService.saveEdit(this.editStudent).subscribe((data) => {
      alert("Edited successfully");
    });
  }

  onCancel(){
    this.editMode = false;
    this.event.emit(this.editMode);
  }

}

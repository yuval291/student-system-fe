import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../service/AuthService';
import { Student } from '../studentUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  student: Student = new Student();
  loginSuccess = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  studentLogin(){
    this.authService.login(this.student).subscribe((dataStudent:Student) => {
      this.loginSuccess = true;
      this.router.navigate(['home',dataStudent.userId]);
      alert("Login Successfully")
    },error => {
      alert("Sorry Please enter correct Username ans Password")
    });
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/UserService';
import { Student } from '../studentUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  studentId: string;
  
  constructor(private route:ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    //Takes the userId from what URL
    this.studentId = this.route.snapshot.paramMap.get('id');
  }

  onLogout(){
    alert("Bye Bye")
    this.router.navigate(['login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User  = new User("","","",0,"");
  message : any;

  constructor(private service : UserServiceService) { }

  ngOnInit() {
  }

  public registerNow(){
    let reponse = this.service.doRegistration(this.user);
    reponse.subscribe(data => {
      this.message = data;
    });
  }

}
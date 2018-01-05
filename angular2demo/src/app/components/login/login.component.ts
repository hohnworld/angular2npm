import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  passwords:string;
  constructor(private storage:StorageService) { }

  ngOnInit() {
    var username=this.storage.getItem("username");
    var passwords=this.storage.getItem("passwords");
    if(username){
      this.username=username;
    }
    if(passwords){
      this.passwords=passwords;
    }
  }
  funRember(){
    if(this.username.length<=5){
      alert("用户名不足5位");
      return;      
    }else{
      this.storage.setItem("username",this.username);
    }
    if(this.passwords.length<=5){
      alert("密码长度不够5位");
      return;
    }else{
      this.storage.setItem("passwords",this.passwords);     
    }
  }

}

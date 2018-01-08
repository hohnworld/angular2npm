import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { timeout } from 'q';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  passwords: string;
  constructor(public storage: StorageService) { }

  ngOnInit() {
    var username = this.storage.getItem("username");
    var passwords = this.storage.getItem("passwords");
    if (username) {
      this.username = username;
    }
    if (passwords) {
      this.passwords = passwords;
    }
  }
  // funRember(){
  //   if(this.username.length<=5){
  //     alert("用户名不足5位");
  //     return;      
  //   }else{
  //     this.storage.setItem("username",this.username);
  //   }
  //   if(this.passwords.length<=5){
  //     alert("密码长度不够5位");
  //     return;
  //   }else{
  //     this.storage.setItem("passwords",this.passwords);     
  //   }
  // }

  funRember() {

    var Dates = new Date();
    var year: number = Dates.getHours();
    var month: any = (Dates.getMinutes() + 1) < 10 ? '0' + (Dates.getMinutes() + 1) : (Dates.getMinutes() + 1);
    var day: any = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();

    this.username = year + '-' + month + '-' + day;
    setTimeout(() => {
      this.funRember()
    }, 1000);
  }

}

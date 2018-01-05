import { Component, OnInit } from '@angular/core';
import{StorageService}from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //任务条目
  task:string;
  //未完成条目集合
  taskUnfinish:any[]=[];
  //完成条目集合
  taskFinish:any[]=[];

  constructor(storage:StorageService) { }

  ngOnInit() {
  }

  //输入条目按回车键
  funKeyup(e){
    if(e.keyCode==13){
      this.taskUnfinish.push(this.task);
      this.task="";
    }
  }
  //条目设置完成
  funSetFinish(i){
    this.taskFinish.push(this.taskUnfinish[i]);
    this.taskUnfinish.splice(i,1);
  }
  //条目设置未完成
  funSetUnfinish(i)
  {
    this.taskUnfinish.push(this.taskFinish[i]);
    this.taskFinish.splice(i,1);
  }
  funDelete(val,i){
    if(val=="finish"){
      this.taskFinish.splice(i, 1);
    }else{
      this.taskUnfinish.splice(i,1);
    }
  }

}

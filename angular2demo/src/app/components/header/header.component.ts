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
  // test=['aaa','bbb','ccc'];
  // testtest(){
  //   var v=JSON.stringify(this.test);
  //   alert(v);
  // }

  constructor(private storage:StorageService) { }

  ngOnInit() {
    //获取完成条目列表
    var finishItems=this.storage.getItem("finish");
    if(finishItems){
      this.taskFinish=finishItems
    }
    //获取未完成条目列表
    var unfinishItems=this.storage.getItem("unfinish");
    if(unfinishItems){
      this.taskUnfinish=unfinishItems;
    }
  }

  //输入条目按回车键
  funKeyup(e){
    if(e.keyCode==13){
      this.taskUnfinish.push(this.task);
      //保存到本地数据，key设置为unfinish
      this.storage.setItem("unfinish",this.taskUnfinish);
      this.task="";
    }
  }
  //条目设置完成
  funSetFinish(i){
    this.taskFinish.push(this.taskUnfinish[i]);
    this.taskUnfinish.splice(i,1);
    //保存到本地数据，key设置为unfinish
    this.storage.setItem("unfinish",this.taskUnfinish);
    this.storage.setItem("finish",this.taskFinish);
  }
  //条目设置未完成
  funSetUnfinish(i)
  {
    this.taskUnfinish.push(this.taskFinish[i]);
    this.taskFinish.splice(i,1);
    //保存到本地数据，key设置为unfinish
    this.storage.setItem("unfinish",this.taskUnfinish);
    this.storage.setItem("finish",this.taskFinish);
  }
  funDelete(val,i){
    if(val=="finish"){
      this.taskFinish.splice(i, 1);
      this.storage.setItem("finish",this.taskFinish);
    }else{
      this.taskUnfinish.splice(i,1);
      this.storage.setItem("unfinish",this.taskUnfinish);
    }
    //保存到本地数据，key设置为unfinish
    
    
  }

}

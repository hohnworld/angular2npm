import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }
  //保存到本地数据
  setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  }
  //读取本地数据
  getItem(key){
    return  JSON.parse(localStorage.getItem(key));
  }
  //删除本地数据
  removeItem(keys){
    localStorage.removeItem(keys);
  }

}

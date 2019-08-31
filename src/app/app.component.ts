import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // serverName="Niroshan_Ratnayake";
  // serverId=1234567;
  // serverStatus='Offline';
  // statusFlag=false;
  // buttonStatus=true;

  // constructor(){
  //   setTimeout(()=>{

  //     this.buttonStatus=false;
  //   },2500);
  // }
  // toggle(){
  //   this.statusFlag=!this.statusFlag;
  //   if(this.statusFlag===true){
  //     this.serverStatus='Online';
  //   }
  //   else{
  //     this.serverStatus='Offline';
  //   }
  //   return this.serverStatus;
  // }

  firstName='';
  


  btn(){
    if(this.firstName==='')
    return true;
    else
    return false;

  }

blank(){
  this.firstName="";
   return this.firstName;
  
}

  
 

}

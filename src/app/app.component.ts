import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  serverName="Niroshan_Ratnayake";
  serverId=1234567;
  serverStatus='Offline';
  statusFlag=false;

  toggle(){
    this.statusFlag=!this.statusFlag;
    if(this.statusFlag===true){
      this.serverStatus='Online'
    }
    return this.serverStatus;
  }

  buttonStatus=true;
  constructor(){
    setTimeout(()=>{

      this.buttonStatus=false;
    },2500);
  }

}

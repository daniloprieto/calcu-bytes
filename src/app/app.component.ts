import { Component } from '@angular/core';

export interface Data{
  h:number,
  w:number,
  depth:number

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calcubyte';
  public bits: number = 0;
  public bytes: number = 0;
  public kbytes: number = 0;
  public mbytes: number = 0;

  public data: Data ={
    h:0,
    w:0,
    depth:0
  };

  constructor(){}

  calculator(){
      let res: number = ( this.data.h * this.data.w ) * this.data.depth;

      this.bits = res;
      this.bytes = this.bits / 8;
      this.kbytes = this.bytes / 1024;
      this.mbytes = this.kbytes / 1024;
  }
}



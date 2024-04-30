import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-labresults',
  templateUrl: './labresults.component.html',
  styleUrls: ['./labresults.component.css']
})
export class LabresultsComponentadmin implements OnInit{
  labresults : any[]=[]
  constructor(private authSrv: AuthService){}
  ngOnInit(): void {
      this.authSrv.getalltestresults().subscribe(data =>{
        this.labresults=data
        console.log(this.labresults)
      })
  }
}

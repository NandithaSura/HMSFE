import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-adminsurgery',
  templateUrl: './adminsurgery.component.html',
  styleUrls: ['./adminsurgery.component.css']
})
export class AdminsurgeryComponent implements OnInit{
  surgeries: any[]=[]
  constructor(private authSrv: AuthService){}
  ngOnInit(): void {
      this.authSrv.getallSurgeryDetails().subscribe(data =>{
        this.surgeries=data
        console.log(this.surgeries)
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  rooms: any[]=[]
  constructor(private authSrv:AuthService){}
  ngOnInit(): void {
      this.authSrv.getallrooms().subscribe(data=>{
        this.rooms=data
      })
  }

}

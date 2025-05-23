import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  show: boolean = false
  showdoc: boolean = false
  ngOnInit(): void {
      const role = localStorage.getItem('role')
      if(role === 'admin'){
        this.show = true
      }
      if(role === 'doctor')
        {
          this.showdoc = true
        }
  }

}

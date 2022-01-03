import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private auth:AuthService) { }
  userdetailsvalue:any
  ngOnInit(): void {
    this.userdetailsvalue=this.auth.userdata;
  }

}

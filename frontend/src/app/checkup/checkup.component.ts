import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { AuthenticationService } from '../_services/authentication.service';

 
@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.component.html',
  styleUrls: ['./checkup.component.css'],
  providers: [DataService]
})
export class CheckupComponent implements OnInit {

  constructor(private dataService: DataService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}

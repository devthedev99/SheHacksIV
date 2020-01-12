import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { AuthenticationService } from '../_services/authentication.service';
import { Cancer } from '../cancer'; 
 
@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.component.html',
  styleUrls: ['./checkup.component.css'],
  providers: [DataService]
})
export class CheckupComponent implements OnInit {
  selectedItem: Cancer; 
  toggleReset: boolean = false; 
  toggleForm: boolean = false; 
  result: String = "";

  constructor(private dataService: DataService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  disableReset() {
    this.toggleReset = false; 
  }

  showResults(form) {
    this.toggleReset = !this.toggleReset; 
    let newResults: Cancer = {
      radius: form.value.radius, 
      texture: form.value.texture, 
      area: form.value.area, 
      density: form.value.density,
      compactness: form.value.compactness
    }

    if (newResults.density != null ) {
      this.result = "malignant";
    }
    else {
      this.result = "benign"; 
    }
    
    this.toggleForm = !this.toggleForm; 
  }

}

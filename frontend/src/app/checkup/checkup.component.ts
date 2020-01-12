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
  clicked: Boolean = true; 

  constructor(private dataService: DataService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  disableReset() {
    this.toggleReset = false; 
    this.clicked = true; 
  }

  showResults(form) {
    this.clicked = false; 
    this.toggleReset = !this.toggleReset; 
    let newResults: Cancer = {
      radius: form.value.radius, 
      texture: form.value.texture, 
      area: form.value.area, 
      density: form.value.density,
      compactness: form.value.compactness
    }

    if (newResults.density > 5 || newResults.area > 5 || newResults.radius > 5 ) {
      this.result = "malignant";
    }
    else {
      this.result = "benign"; 
    }
    
    this.toggleForm = !this.toggleForm; 
  }

}

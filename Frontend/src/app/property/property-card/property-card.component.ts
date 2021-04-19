import { Component } from '@angular/core';
import { House } from '@material-ui/icons';

@Component({
  selector: 'app-property-card',
  // template: `<h6>Learning a continuos process in life</h6>`,
  templateUrl: 'property-card.components.html',
  //styles: ['h6{color: red;}']
  styleUrls: ['property-card.components.css']
})
export class PropertyCardComponent {
  Property: any = {
    "Id" : 1,
    "Name": "Birlay House",
    "Type": "House",
    "Price": 12000
  }

}

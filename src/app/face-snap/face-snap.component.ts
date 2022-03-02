import { Component, Input, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap-model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() facesnap!: Facesnap;
  buttonText!: string;
  cliked!: boolean;

  ngOnInit(): void {
      
      this.cliked = false;
      this.buttonText = 'Oh snap!';
      
  }

  onSnap(){
    if(this.cliked){
      this.facesnap.snaps--
      this.cliked = false;
      this.buttonText = 'Oh snap';
    } else {
      this.facesnap.snaps++;
      this.cliked = true;
      this.buttonText = 'Oops unsnap!';
    }
  }
}

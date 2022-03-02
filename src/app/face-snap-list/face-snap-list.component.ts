import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../models/face-snap-model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: Facesnap[];

  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Léguman',
        description: 'Le superhéros défenseur des légumes',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/10/26/20/00/pumpkin-2892303_960_720.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris'
      },

      {
        title: 'Chevalier',
        description: 'Le chevalier de l\'amour',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/03/27/19/38/knight-1283910_960_720.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Tokyo'
      },
      
      {
        title: 'Goldi',
        description: 'Le plus fidèle des compagnons',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/05/08/16/06/dog-5146351_960_720.jpg',
        createdDate: new Date(),
        snaps: 0
      }
    ];
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlacesService} from './places.service';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []
  
  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.places = this.placeService.getplaces();
  }

  ionViewWillEnter(){
    this.places = this.placeService.getplaces();
  }

  addNewPlace(){
    this.router.navigate(['/new-place'])
  }

  GoToHome(){
    this.router.navigate(['/home']);
  }

}

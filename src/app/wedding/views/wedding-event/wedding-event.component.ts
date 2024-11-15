import {Component, OnInit} from '@angular/core';
import {WeddingHeaderComponent} from "@/wedding/views/wedding-header/wedding-header.component";
import {GoogleMapsModule} from "@angular/google-maps";

@Component({
  selector: 'wedding-event',
  standalone: true,
  imports: [
    WeddingHeaderComponent,
    GoogleMapsModule
  ],
  templateUrl: './wedding-event.component.html',
  styleUrl: './wedding-event.component.scss'
})
export default class WeddingEventComponent implements OnInit {
  locationName: string = 'Boda Rafa+Moni';
  options: google.maps.MapOptions = {
    mapId: "3682a805cab53aa9s",
    center: { lat: 19.37926548535142, lng: -99.06237959118323 },
    zoom: 16,
  };

  eventLocation: any[] = [
    { lat: 19.379032404085915, lng: -99.06233967055216 },
  ];

  ngOnInit() {
    const parser = new DOMParser();
    const svgString = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="#FF5733" stroke="#FFFFFF" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd"/>
                    </svg>`

    this.eventLocation.forEach( (location) => {
      location.content = parser.parseFromString( svgString, "image/svg+xml").documentElement;
    });
  }
}

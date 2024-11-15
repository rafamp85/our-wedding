import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'wedding-plane',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './wedding-plane.component.html',
  styleUrl: './wedding-plane.component.scss'
})
export class WeddingPlaneComponent {

}

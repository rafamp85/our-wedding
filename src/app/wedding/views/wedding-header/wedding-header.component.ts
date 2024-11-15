import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'wedding-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './wedding-header.component.html',
  styleUrl: './wedding-header.component.scss'
})
export class WeddingHeaderComponent {

}

import { Component } from '@angular/core';
import {WeddingHeaderComponent} from "@/wedding/views/wedding-header/wedding-header.component";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {percentage} from "@angular/fire/storage";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'wedding-album',
  standalone: true,
  imports: [
    WeddingHeaderComponent,
    AsyncPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './wedding-album.component.html',
  styleUrl: './wedding-album.component.scss'
})
export default class WeddingAlbumComponent {




  protected readonly percentage = percentage;
}

import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { getDownloadURL } from "@angular/fire/storage";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {BehaviorSubject, map, tap, throwError} from "rxjs";
import {WeddingHeaderComponent} from "@/wedding/views/wedding-header/wedding-header.component";
import {WeddingGalleryService} from "@/wedding/views/wedding-gallery/wedding-gallery.service";
import {ImageStorage} from "@/wedding/views/wedding-plane/plane-gallery.interface";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-plane-gallery',
  standalone: true,
  imports: [
    WeddingHeaderComponent,
    NgOptimizedImage
  ],
  templateUrl: './plane-gallery.component.html',
  styleUrl: './plane-gallery.component.scss'
})
export default class PlaneGalleryComponent implements OnInit {
  paramValue = signal('');
  images = signal<ImageStorage[]>([]);
  loadingPhotos = signal(true);

  private readonly _routes = inject(ActivatedRoute);
  private readonly _weddingGallerySrv = inject( WeddingGalleryService );
  private readonly _destroyRef = inject( DestroyRef );

  ngOnInit() {
    this.loadingPhotos.set(false);
    this._routes.queryParams.pipe(
      takeUntilDestroyed( this._destroyRef ),
      tap( params => this.paramValue.set(params['title']) ),
    ).subscribe();

    this._weddingGallerySrv.getPhotos()
      .then(urls => {
        this.loadingPhotos.set(true);
        this.images.set(urls);
      })
      .catch(throwError => console.error(throwError));
  }
}

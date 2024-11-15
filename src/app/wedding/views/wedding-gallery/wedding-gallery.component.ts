import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {AsyncPipe, NgIf, NgStyle} from "@angular/common";
import {WeddingHeaderComponent} from "@/wedding/views/wedding-header/wedding-header.component";
import {WeddingGalleryService} from "@/wedding/views/wedding-gallery/wedding-gallery.service";
import {Observable, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import confetti from "canvas-confetti";


@Component({
  selector: 'wedding-gallery',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    WeddingHeaderComponent,
    NgStyle
  ],
  templateUrl: './wedding-gallery.component.html',
  styleUrl: './wedding-gallery.component.scss'
})
export default class WeddingGalleryComponent implements OnInit {
  uploadPercent = signal('0%');
  downloadURL: string;

  image$: Observable<any[]>;

  private readonly _weddingGallerySrv = inject( WeddingGalleryService );
  private readonly _destroyRef = inject( DestroyRef );

  ngOnInit() {
    // this.image$ = this._weddingSrv.getImages();
  }

  uploadPhoto( event: Event ): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      const file = input.files[0];
      const progress = this._weddingGallerySrv.uploadPhoto(file);
      progress.pipe(
        takeUntilDestroyed( this._destroyRef ),
        tap( percent => console.log() ),
        tap( percent => this.uploadPercent.set(`${parseInt(percent.progress).toString()}%`) ),
      ).subscribe( () => {
        this.celebrate();
      });
    } else {
      // TODO: Moda de Error
    }
  }

  celebrate() {
    const duration = 3000;

    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: ['#FF4500', '#008080', '#FFD700'],
    });

    setTimeout(() => confetti.reset(), duration);
  }
}

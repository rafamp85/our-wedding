import {inject, Injectable, signal} from '@angular/core';
import {Storage, ref, uploadBytesResumable, percentage, listAll, getDownloadURL} from "@angular/fire/storage";
import {Observable, of} from "rxjs";
import {ImageStorage} from "@/wedding/views/wedding-plane/plane-gallery.interface";

@Injectable({
  providedIn: 'root'
})
export class WeddingGalleryService {

  images: ImageStorage[]= ([]);
  private readonly _storage = inject( Storage );

  uploadPhoto( file: File ): Observable<any> {
    const storageRef = ref(this._storage, `gallery/${file.name}`);
    const task = uploadBytesResumable(storageRef, file);
    return percentage(task);
  }

  async getPhotos() {
    const reference = ref(this._storage, 'gallery');
    const images = await listAll(reference);

    this.images.length = 0;
    for (const photo of images.items) {
      const url = await getDownloadURL( photo );
      this.images.push({url, name: photo.name});
    }
    return this.images;
  }
}

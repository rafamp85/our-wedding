import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {WeddingHeaderComponent} from "@/wedding/views/wedding-header/wedding-header.component";
import {WeddingWishesService} from "@/wedding/views/wedding-wishes/wedding-wishes.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {tap} from "rxjs";
import {WeddingWishes} from "@/wedding/views/wedding-wishes/wedding-wishes.interface";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-wishes-list',
  standalone: true,
  imports: [
    WeddingHeaderComponent,
    NgIf,
    NgForOf,
  ],
  templateUrl: './wishes-list.component.html',
  styleUrl: './wishes-list.component.scss',
})
export default class WishesListComponent implements OnInit {
  private readonly _weddingSrv = inject(WeddingWishesService);
  private readonly _destroyRef = inject( DestroyRef );

  messagesList: WeddingWishes[] = [];

  ngOnInit(): void {
    console.log(this.messagesList.length);
    this.getAllMessages();
  }

  getAllMessages() {
    this._weddingSrv.getAllMessages()
      .pipe(
        takeUntilDestroyed( this._destroyRef ),
        tap((res: WeddingWishes[]) => this.messagesList = [... res]),
      ).subscribe();
  }
}

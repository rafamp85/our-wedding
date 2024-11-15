import {Component, inject, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {WeddingHeaderComponent} from "@/wedding/views/wedding-header/wedding-header.component";
import {ColumnKeys, WeddingWishes} from "@/wedding/views/wedding-wishes/wedding-wishes.interface";
import {WeddingWishesService} from "@/wedding/views/wedding-wishes/wedding-wishes.service";
import {RouterLink} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'wedding-wishes',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    WeddingHeaderComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './wedding-wishes.component.html',
  styleUrl: './wedding-wishes.component.scss'
})
export default class WeddingWishesComponent implements OnInit {
  myForm: FormGroup;
  displayedColumns: ColumnKeys<WeddingWishes> = ['id', 'name', 'phone', 'message', 'created'];

  private readonly _weddingSrv = inject(WeddingWishesService);

  isModalOpen = signal(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this._buildForm();
  }

  private _buildForm(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      created: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log( 'Form Submitted!', this.myForm.value );
      const message = this.myForm.value;
      this._weddingSrv.newMessage(message);
      this.myForm.reset();

      this.isModalOpen.set(true);
    } else {
      console.warn('Form is invalid!');
      return;
    }
  }
}

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {WeddingHomeComponent} from "@/wedding/views/wedding-home/wedding-home.component";
import {WeddingPlaneComponent} from "@/wedding/views/wedding-plane/wedding-plane.component";
import {WeddingHeaderComponent} from "@/wedding/views/wedding-header/wedding-header.component";

@Component({
  selector: 'wedding-view',
  standalone: true,
  imports: [
    WeddingHomeComponent,
    WeddingPlaneComponent,
    WeddingHeaderComponent,
  ],
  templateUrl: './wedding-view.component.html',
  styleUrl: './wedding-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WeddingViewComponent {

}

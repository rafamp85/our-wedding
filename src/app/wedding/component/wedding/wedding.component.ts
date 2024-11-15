import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'wedding',
  standalone: true,
  imports: [],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeddingComponent {

}

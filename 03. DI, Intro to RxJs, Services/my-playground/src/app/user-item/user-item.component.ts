import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonPlaceHolder, User } from '../types/user.js';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent {
  @Input('user') user = {} as JsonPlaceHolder;
}

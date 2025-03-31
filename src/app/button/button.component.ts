import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pp-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent { }

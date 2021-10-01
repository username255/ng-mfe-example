import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.scss']
})
export class PreComponent {
  @Input() content = '';
}

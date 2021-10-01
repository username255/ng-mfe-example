import { Component, Input } from '@angular/core';
import { SharedDataService } from '../../services';

@Component({
  selector: 'ui-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  @Input() title = '[TITLE]'
  sharedServiceValue: Record<string, any> | null = null;

  constructor(private readonly sharedDataService: SharedDataService) {
    this.sharedDataService.next({ pageOne: 'page one registered' });
    this.sharedDataService.value$.subscribe((value) => this.sharedServiceValue = value);
  }

  updateSharedState(): void {
    const date: Date = new Date();
    this.sharedDataService.next({ pageOneLastUpdate: `${date.toString()}` });
  }
}

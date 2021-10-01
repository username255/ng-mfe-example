import { Component, Input } from '@angular/core';
import { SharedDataService } from '../../services';

@Component({
  selector: 'ui-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
  @Input() content!: string;
  sharedServiceValue: Record<string, any> | null = null;

  constructor(private readonly sharedDataService: SharedDataService) {
    this.sharedDataService.next({ pageTwo: 'page two registered' });
    this.sharedDataService.value$.subscribe((value) => this.sharedServiceValue = value);
  }

  updateSharedState(): void {
    const date: Date = new Date();
    this.sharedDataService.next({ pageTwoLastUpdate: `${date.toString()}` });
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService implements OnDestroy {

  private data$: BehaviorSubject<any> = new BehaviorSubject({});

  ngOnDestroy(): void {
    this.data$.complete();
  }

  next(data: any): void {
    this.data$.next({ ...this.data$.value, ...data });
  }

  get value(): any {
    return this.data$.value;
  }

  get value$(): Observable<any> {
    return this.data$
  }

}

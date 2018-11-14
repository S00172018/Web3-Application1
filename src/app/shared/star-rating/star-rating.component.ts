import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
@Input() rating: number;
starWidth: number;
@Output() notify: EventEmitter<string> = new EventEmitter<string>();

onClick() {
  this.notify.emit('clicked!');
}

  constructor() { }

  public ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }
}

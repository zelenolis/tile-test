import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Output() lostFocuses = new EventEmitter<boolean>();

  bar: boolean = false;

  onFocus() {
    this.bar = true;
  }

  onBlur() {
    this.bar = false;
    this.lostFocuses.emit(this.bar);
  }

}

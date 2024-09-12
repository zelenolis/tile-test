import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NgIf } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ left: "100%", width: 0 }),
        animate("200ms ease-out", style({ left: 0, width: "100%" }))
      ]),
      transition(":leave", [
        style({ left: 0, width: "100%" }),
        animate("200ms ease-in", style({ left: "100%", width: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent {

  opened: boolean = false;
  onClick() {
    this.opened = !this.opened;
  }

  onClose(boo: boolean) {
    this.opened = boo;
  }
}

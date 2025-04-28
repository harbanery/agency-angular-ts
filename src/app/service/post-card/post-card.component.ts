import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  templateUrl: './post-card.component.html',
})
export class PostCardComponent {
  @Input() post: any;
}

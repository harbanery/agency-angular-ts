import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { PostCardComponent } from './post-card/post-card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './service.component.html',
})
export class ServiceComponent {
  console = console;

  postList: Observable<any>;
  private readonly postService: ApiService = inject(ApiService);

  constructor() {
    this.postList = this.postService.getPosts();
  }
}

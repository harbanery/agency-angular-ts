import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
    NgIf,
    AsyncPipe,
    RouterModule,
  ],
  templateUrl: './service-detail.component.html',
})
export class ServiceDetailComponent implements OnInit {
  console = console;
  value: string | undefined;

  post$!: Observable<any>; // Note the $ to indicate observable

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly postService = inject(ApiService);

  onSubmit(): void {
    if (this.value) console.log('Submitted value:', this.value);
    // Handle form submission here (e.g. send to API)
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.post$ = this.postService.getPost(id); // Observable used directly
    }
  }
}

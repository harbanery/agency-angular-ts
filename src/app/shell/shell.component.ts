import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css'],
})
export class ShellComponent implements OnInit {
  isSidebarActive = false;

  constructor(private readonly _router: Router) {}

  ngOnInit() {
    // this._socketService.connect();
  }

  sidebarToggle(toggleState: boolean) {
    this.isSidebarActive = toggleState;
  }

  private _reloadCurrentRoute(path?: string) {
    const currentUrl = path || this._router.url;
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([currentUrl]);
    });
  }
}

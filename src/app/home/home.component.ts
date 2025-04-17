import { Component } from '@angular/core';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionOneComponent, SectionTwoComponent, SectionThreeComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Welcome to Home Page!';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = {
    a: 'Node.js',
    b: 'React.js',
    c: 'MongoDB',
    g: 'Angular',
  };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  project1 = {
    name: 'Movie App With React',
    url: 'https://github.com/nadaaboelkheir/Movie-App-React',
  };
  project2 = {
    name: 'Todo App With React',
    url: 'https://github.com/nadaaboelkheir/Todo-App-React',
  };
  project3= {
    name: 'E-commerce website',
    url: 'https://github.com/nadaaboelkheir/Multi-Actor-E-commerce',
  };
}

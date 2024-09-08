import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
name:string = "Nada Ahmed Aboelkheir"
title:string = "Full Stack Developer Using MEARN"
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '9-AssetsLesson';
  photoUrls: string[] = [];


  constructor() {
    // La ruta de las imagenes tiene que existir en la carpeta 'public'
    this.photoUrls.push('/assets/images/girl.webp');
    this.photoUrls.push('/assets/images/girl2.webp');
    this.photoUrls.push('/assets/images/girl3.webp');
    this.photoUrls.push('/assets/images/girl4.webp');
    this.photoUrls.push('/assets/images/boy.webp');
    this.photoUrls.push('/assets/images/boy2.webp');
    this.photoUrls.push('/assets/images/boy3.webp');
    this.photoUrls.push('/assets/images/boy4.webp');
  }
}
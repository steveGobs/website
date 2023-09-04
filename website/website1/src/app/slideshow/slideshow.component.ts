import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})

export class SlideshowComponent {
  
  
  ngOnInit() {
    this.startAutoAdvance();
  }


  images: string[] = [
    'Black guy.jpg',
    'logo-grass.jpg',
    'off-box.jpg',
    'temp-clock.jpg',
    'Virgil.jpg',
  ];
  currentIndex: number = 0;
  
  
  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first slide
    }
  }
  
  previousSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Go to the last slide
    }
  }
  
  autoAdvanceInterval: number = 2000; 

  startAutoAdvance() {
  setInterval(() => {this.nextSlide();}, this.autoAdvanceInterval);
  }

}

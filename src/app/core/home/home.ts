import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from "gsap"

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      requestAnimationFrame(() => {
        gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 })
          .add(gsap.set(".gradient-text", { backgroundPositionX: 0 }))
          .add(gsap.to(".gradient-text", { ease: "none", duration: 6, backgroundPositionX: 200 }))
      });
    }
  }
}

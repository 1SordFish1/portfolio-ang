import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from "gsap"
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrambleTextPlugin);
      const chars = "QWERTYUIOPLKJHGFDSAZXCVBNMplmnkoijbhuygvcftrdxzsewqa6574839201*&^%$#@!"

      requestAnimationFrame(() => {
        let loaderTimeline = gsap.timeline({
          delay: 0,
          repeat: 0,
          repeatDelay: 1,
          repeatRefresh: true,
          smoothChildTiming: true,
          autoRemoveChildren: true,
        });

        loaderTimeline.set(".loader", {opacity: 0});
        loaderTimeline.to(".loader", {opacity: 1});

        loaderTimeline.to("#loader-text", {
          delay: 1,
          duration: 2,
          ease: "sine.inOut",
          scrambleText: {
            text: "Ready to Go",
            chars: chars,
            tweenLength: true,
            speed: 1,
            delimiter: " "
          }
        });

        loaderTimeline.to(".loader", {delay: 0.5,opacity: 0});

        loaderTimeline.to("#app-loader", {
          // scaleY: 0,
          opacity: 0,
          transformOrigin: "50% 0%",
          duration: 1,
          ease: "power4.out",
          onComplete: () => {
            const loader = document.querySelector('#app-loader');
            if (loader) {
              loader.remove();
            }
          }
        });
      });
    }
  }
}

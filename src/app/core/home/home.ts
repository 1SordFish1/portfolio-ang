import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  mySkills: string[] = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS/SCSS",
    "Angular",
    "RxJS",
    "NgRX Store",
    "Jest",
    "GraphQL",
    "GIT",
    "GitLab",
    "Version Control System",
    "Agile Methodology",
    "Unit Testing",
    "E2E Testing",
    "Cypress",
    "NodeJS",
    "Express.JS"
  ];

  myTools: {image: string, name: string}[] = [
    {
      image: "assets/vscode.png",
      name: "VS Code"
    },
    {
      image: "assets/elephant.png",
      name: "PostgreSQL"
    },
    {
      image: "assets/postman.png",
      name: "Postman"
    }
  ]

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(SplitText);
      gsap.registerPlugin(ScrollToPlugin) ;
      requestAnimationFrame(() => {
        gsap.to(window, {duration: 1, scrollTo:0});

        gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: 0 })
          .add(gsap.set(".gradient-text", { backgroundPositionX: 0 }))
          .add(gsap.to(".gradient-text", { ease: "none", duration: 6, backgroundPositionX: 200 }));

        let tlIntro = gsap.timeline({
          scrollTrigger: {
            trigger: "hello-container",
            scrub: 2,
            pin: true,
          }
        });

        tlIntro.to('.hello-text', { scale: 130, xPercent: -250, transaformOrigin: "50vh 50vw" })
      });
    }
  }
}

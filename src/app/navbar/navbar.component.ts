//import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { Component, AfterViewInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('navbar', { read: ElementRef }) navbar!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  ngAfterViewInit() {
    // Scroll on initial load if there's a fragment
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(fragment);
        }, 50); // small delay to allow view to render
      }
    });
  }

  scrollTo(sectionId: string) {
    const navbarHeight = this.navbar ? this.navbar.nativeElement.offsetHeight : 0;
    // Update the URL
    this.router.navigate([], {
      fragment: sectionId,
      queryParamsHandling: 'preserve'
    }).then(() => {
      // Scroll manually after the URL updates
      setTimeout(() => {
        /*this.viewportScroller.scrollToAnchor(sectionId);*/
        const element = document.getElementById(sectionId);
        if (element) {
          // Calculate scroll position offset by navbar height
          const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }

        // Collapse mobile navbar if open
        const navbarCollapse = document.getElementById('navbar-content');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          (window as any).bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        }
      }, 50);
    });
  }

}

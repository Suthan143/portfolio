import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  
  //roles: { text: string; color: string }[] = [
  //  { text: 'Full Stack Developer 🖥️', color: 'linear-gradient(90deg,#ff7eb3,#ff758c)' },
  //  { text: 'Backend Developer 🎨', color: 'linear-gradient(90deg,#43cea2,#185a9d)' },
  //  { text: 'Frontend Developer ⚙️', color: 'linear-gradient(90deg,#f7971e,#ffd200)' }
  //];
  roles: { text: string; color: string }[] = [
    { text: 'Full Stack Developer', color: 'linear-gradient(90deg,#ff7eb3,#ff758c)' },
    { text: 'Backend Developer', color: 'linear-gradient(90deg,#43cea2,#185a9d)' },
    { text: 'Frontend Developer', color: 'linear-gradient(90deg,#f7971e,#ffd200)' }
  ];

  currentText = '';
  currentRoleIndex = 0;
  charIndex = 0;
  isDeleting = false;

  typingSpeed = 230;
  deletingSpeed = 80;
  displayDelay = 2000;

  timer: any;

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  get currentColor(): string {
    return this.roles[this.currentRoleIndex].color;
  }

  startTyping() {
    const tick = () => {
      const fullText = this.roles[this.currentRoleIndex].text;

      if (!this.isDeleting) {
        this.charIndex++;
        this.currentText = fullText.substring(0, this.charIndex);

        if (this.charIndex === fullText.length) {
          this.isDeleting = true;
          this.timer = setTimeout(tick, this.displayDelay);
          return;
        }
      } else {
        this.charIndex--;
        this.currentText = fullText.substring(0, this.charIndex);

        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        }
      }

      this.timer = setTimeout(tick, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
    };

    tick();
  }
}

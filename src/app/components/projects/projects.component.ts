import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce App',
      description: 'A full-stack shopping application.',
      tech: 'Java, Spring Boot',
      link: '#'
    },
    {
      title: 'Task Manager',
      description: 'A simple To-Do list application.',
      tech: 'JavaScript, HTML',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website.',
      tech: 'Angular',
      link: '#'
    }
  ];
}
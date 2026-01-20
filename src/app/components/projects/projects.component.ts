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
      title: 'E-Commerce Platform',
      description: 'A full-stack shopping application with product listing, cart management, and payment gateway integration.',
      tech: 'Angular, Spring Boot, MySQL',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A smart productivity tool to organize daily tasks. Includes drag-and-drop features and priority settings.',
      tech: 'Angular, Firebase, Bootstrap',
      link: '#'
    },
    {
      title: 'Movie Booking System',
      description: 'An online cinema ticket booking system where users can select seats and book tickets in real-time.',
      tech: 'Java, Spring Boot, Angular',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A real-time weather forecasting application that fetches data from OpenWeatherMap API.',
      tech: 'Angular, REST API, CSS',
      link: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'A fully responsive personal portfolio website designed to showcase skills, projects, and contact info.',
      tech: 'Angular, HTML5, Custom CSS',
      link: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'An application to track daily workouts and diet plans. Visualizes progress using charts.',
      tech: 'Angular, Chart.js, Node.js',
      link: '#'
    },
    {
      title: 'Real-time Chat App',
      description: 'Instant messaging application supporting private and group chats with real-time notifications.',
      tech: 'Angular, WebSocket, MySQL',
      link: '#'
    }
  ];

}
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Catalog } from './catalog/catalog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root'
  template: `
  <div class="header">
    <div class="site-name">
      {{ title }}
    </div>
    <div class="site-symbol">
      <img src="Logo.png" alt="Logo do site">
    </div>
    <div class="button-group">
      <button>Login</button>
      <button>Registro</button>
    </div>
  </div>
  `
  styles: [`
    .header {
      background-color: #f0f0f0;
      padding: 20px;
      text-align: left; 
    }

    .site-name {
      font-size: 20px;
      font-weight: bold;
    }
    `]

})
export class AppComponent {
  title = 'Universo da 7 arte'
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NfComponent } from './components/nf/nf.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,ContactComponent,NfComponent,RouterModule,ServicesComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  paren="this is from parent to childddddddddddddddd"
  cpp=""
}

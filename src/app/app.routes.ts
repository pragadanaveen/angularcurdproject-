import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NfComponent } from './components/nf/nf.component';
import { ServicesComponent } from './components/services/services.component';

export const routes: Routes = 

[

    // {
    //   path:'',
    //   redirectTo:'contact',
    //   pathMatch: 'full'
    // },
    {
      path:'home',
      component: HomeComponent,
      
    },
    {
      path:'ser',
      component: ServicesComponent,
      
    },
    {
      path:'contact',
      component: ContactComponent,
      
    },
    // {
    //   path:'**',
    //   component: NfComponent,
    //   
    // }
    
    
    
    ];

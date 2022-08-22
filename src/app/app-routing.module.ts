import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';

import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
 
const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: '', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'header'},
  { path: '**', pathMatch: 'full', redirectTo: 'footer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

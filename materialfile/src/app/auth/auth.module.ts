import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
 import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import{MatCardModule} from '@angular/material/card';
import{MatInputModule} from '@angular/material/input';
  // import{FlexLayoutModule} from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    LoginComponent,
     RegisterComponent,
     HomeComponent,
     ResultComponent,
  
  ],
  imports: [
   //  CommonModule,
     FormsModule,
    MatToolbarModule,
    MatSidenavModule,  
    MatIconModule,
    RouterModule,
    MatListModule,
    MatButtonModule
    ,BrowserAnimationsModule
    ,MatCardModule,
    MatInputModule,
    AuthRoutingModule,
    //  FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { StudentService } from './components/student.service';
import { CrudComponent } from './crud/crud.component';
import { ProductService } from './product.service';
import { PraticeComponent } from './pratice/pratice.component';
import { ChildComponent } from './pratice/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    RegisterComponent,
    LoginComponent,
    StudentlistComponent,
    StudentdetailsComponent,
    CrudComponent,
    PraticeComponent,
    ChildComponent,

    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,

    
  ],
  providers: [StudentService ,
              ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

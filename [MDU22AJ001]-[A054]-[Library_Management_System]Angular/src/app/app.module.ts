import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { LibrarianDetailsComponent } from './component/librarian-details/librarian-details.component';
import { LoginComponent } from './component/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './component/menu/menu.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ReportGenerationComponent } from './component/report-generation/report-generation.component';
import { LibraianLoginComponent } from './component/libraian-login/libraian-login.component';
import { LibrarianDashboardComponent } from './component/librarian-dashboard/librarian-dashboard.component';
import { NormsComponent } from './component/norms/norms.component';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { SearchBooksComponent } from './component/search-books/search-books.component';
import { AddFeedbackComponent } from './component/add-feedback/add-feedback.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UpdateLibrarianComponent } from './component/update-librarian/update-librarian.component';
import { UpdateBooksComponent } from './component/update-books/update-books.component';
import { UserpageComponent } from './component/userpage/userpage.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { SurveyComponent } from './component/survey/survey.component';
import { SearchbookComponent } from './component/searchbook/searchbook.component';
import { HomeComponent } from './component/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MenuComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    LibrarianDetailsComponent,
    ReportGenerationComponent,
    LibraianLoginComponent,
    LibrarianDashboardComponent,
    NormsComponent,
    AddBooksComponent,
    BookDetailsComponent,
    SearchBooksComponent,
    AddFeedbackComponent,
    UserDashboardComponent,
    ForgotpasswordComponent,
    UpdateLibrarianComponent,
    UpdateBooksComponent,
    UserpageComponent,
    SurveyComponent,
    FeedbackComponent,
    SearchbookComponent,
    HomeComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

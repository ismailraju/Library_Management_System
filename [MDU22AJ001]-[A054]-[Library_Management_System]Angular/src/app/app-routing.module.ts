import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './component/add-books/add-books.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { FeedbackComponent } from './component/feedback/feedback.component';

import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './component/home/home.component';
import { LibraianLoginComponent } from './component/libraian-login/libraian-login.component';
import { AdminfeedbackComponent } from './component/librarian-dashboard/adminfeedback/adminfeedback.component';
import { LibrarianDashboardComponent } from './component/librarian-dashboard/librarian-dashboard.component';
import { LibrarianDetailsComponent } from './component/librarian-details/librarian-details.component';
import { LoginComponent } from './component/login/login.component';
import { NormsComponent } from './component/norms/norms.component';

import { RegistrationComponent } from './component/registration/registration.component';
import { SearchBooksComponent } from './component/search-books/search-books.component';
import { SearchbookComponent } from './component/searchbook/searchbook.component';
import { SurveyComponent } from './component/survey/survey.component';
import { UpdateBooksComponent } from './component/update-books/update-books.component';
import { UpdateLibrarianComponent } from './component/update-librarian/update-librarian.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserpageComponent } from './component/userpage/userpage.component';

const routes: Routes = [
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"librarian-details",component:LibrarianDetailsComponent},
  {path:"book-details",component:BookDetailsComponent },
  {path:"librarian-login",component:LibraianLoginComponent },
  {path:"librarian-dashboard",component:LibrarianDashboardComponent },
  {path:"norms",component:NormsComponent },
  {path:"add-books",component:AddBooksComponent },
  {path:"book-details",component:BookDetailsComponent},
  {path:"search-books",component:SearchBooksComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:"update-books",component:UpdateBooksComponent},
  {path:"update-librarian",component:UpdateLibrarianComponent},
  {path:"librarian-details",component:LibrarianDetailsComponent},
  {path:"userpage",component:UserpageComponent},
  {path:"survey",component:SurveyComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"adminfeedback",component:AdminfeedbackComponent},
  {path:"search",component:SearchbookComponent},
  {path:"home",component:HomeComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

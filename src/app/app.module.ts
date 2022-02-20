import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AccordionModule } from "ngx-bootstrap";
import { FormsModule } from "@angular/forms";
import { ModalModule } from "ngx-bootstrap/modal";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { HomepageComponent } from './homepage/homepage.component';
import { WebsitelayoutComponent } from './layout/websitelayout/websitelayout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { QuestionSngComponent } from './question-sng/question-sng.component';
import { QuestiondashboardComponent } from './questiondashboard/questiondashboard.component';
import { QuestionUpdateComponent } from './question-update/question-update.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, WebsitelayoutComponent, HeaderComponent, FooterComponent, CardComponent, DetailComponent, AdminlayoutComponent, QuestionSngComponent, QuestiondashboardComponent, QuestionUpdateComponent, AddQuestionComponent],
  imports: [
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

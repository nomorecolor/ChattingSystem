import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { MessageComponent } from "./components/message/message.component";
import { MessageInputComponent } from "./components/message-input/message-input.component";
import { MessageConversationComponent } from "./components/message-conversation/message-conversation.component";
import { ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyMaterialModule } from "./material.module/material.module.module";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MessageComponent,
    MessageInputComponent,
    MessageConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

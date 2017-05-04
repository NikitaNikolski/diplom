import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GetStartedComponent } from './get-started/get-started.component';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { StartPageComponent } from './start-page/start-page.component';
import { PythonPageComponent } from './python-page/python-page.component';
import { JsPageComponent } from './js-page/js-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PostsComponent,
    GetStartedComponent,
    PythonPageComponent,
    JsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

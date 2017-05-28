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
import { BarcodeComponent } from './js-page/barcode/barcode.component';
import { MediaStreamComponent } from './js-page/barcode/media-stream/media-stream.component';
import { InputFieldComponent } from './js-page/barcode/input-field/input-field.component';
import { InstantSearchComponent } from './js-page/barcode/instant-search/instant-search.component';
import { BarcodeValidatorService } from './js-page/barcode/services/barcode-validator.service';
import { BarcodeDecoderService } from './js-page/barcode/services/barcode-decoder.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PythonBarcodeService } from './python-page/python-barcode.service';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PostsComponent,
    GetStartedComponent,
    PythonPageComponent,
    JsPageComponent,
    BarcodeComponent,
    MediaStreamComponent,
    InputFieldComponent,
    InstantSearchComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [BarcodeValidatorService, BarcodeDecoderService, PostsService, PythonBarcodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

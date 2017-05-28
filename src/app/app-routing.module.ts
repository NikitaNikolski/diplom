import { RouterModule, Routes } from '@angular/router';

import { GetStartedComponent } from './get-started/get-started.component';
import { JsPageComponent } from './js-page/js-page.component';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { PythonPageComponent } from './python-page/python-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { BARCODE_ROUTE } from "./js-page/barcode/barcode.route";
import { BarcodeComponent } from './js-page/barcode/barcode.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'start-page',
        pathMatch: 'full'
    },
    {
        path: 'start-page',
        component: StartPageComponent
    },
    {
        path: 'get-started',
        component: GetStartedComponent
    },
    {
        path: 'python-page',
        component: PythonPageComponent
    },
    {
        path: 'js-page',
        component: JsPageComponent
    },
    {
        path: 'barcode-js',
        redirectTo: 'barcode-js/search',
        pathMatch: 'full'
    },
    {
        path: 'barcode-js',
        component: BarcodeComponent,
        children: BARCODE_ROUTE
    },
    {
        path: 'about-page',
        component: AboutComponent
    },
    {
        path: 'contacts-page',
        component: ContactsComponent
    },
    {
        path: 'app-page',
        redirectTo: 'start-page',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
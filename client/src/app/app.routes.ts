import { Routes } from '@angular/router';
import { SubscribeComponent } from '../subscribe/subscribe.component';
import { SearchCustomersComponent } from '../search-customers/search-customers.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

export const routes: Routes = [
    { path: '', component: SubscribeComponent },
    { path: 'search', component: SearchCustomersComponent },
    { path: '**', component: ErrorPageComponent }
];

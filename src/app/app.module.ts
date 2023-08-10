import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgIconsModule } from '@ng-icons/core';
import { heroMagnifyingGlass, heroXCircle } from '@ng-icons/heroicons/outline';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchRepoComponent } from './components/search-repo/search-repo.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchRepoComponent,
    HomeComponent,
    ResultsComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgIconsModule.withIcons({ heroMagnifyingGlass, heroXCircle }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

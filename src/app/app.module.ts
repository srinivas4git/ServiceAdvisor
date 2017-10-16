import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
// import { NgFor } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmartcContractCreationComponent } from './smartc-contract-creation/smartc-contract-creation.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { AddPhaseDirective } from './add-phase.directive';
import { SearchComponent } from './search/search.component';
import { FilterText, FilterTwo } from './filter.pipe';
import { SortingTable } from './sorting.pipe';
import { AddPhase } from './directives/addPhase.component';






const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'help', component: HelpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'smart-contract-creation', component: SmartcContractCreationComponent },
  { path: 'search-results', component: SearchComponent },
  { path: '**', component: FileNotFoundComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    HelpComponent,
    DashboardComponent,
    SmartcContractCreationComponent,
    FileNotFoundComponent,
    AddPhaseDirective,
    AddPhaseDirective,
    SearchComponent,
    FilterText,
    SortingTable,
    AddPhase,
    FilterTwo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}

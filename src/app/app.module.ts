import { ItemInfoComponent } from './item_list/item.info.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FofComponent } from './fof/fof.component';
import { ItemListComponent } from './item_list/item-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarsComponent } from './stars/stars.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    StarsComponent,
    ReplacePipe,
    NavBarComponent,
    FofComponent,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'items', component: ItemListComponent },
      { path: 'items/info/:id', component: ItemInfoComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: '**', component: FofComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

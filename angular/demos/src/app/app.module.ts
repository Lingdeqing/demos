import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestMaterialComponent } from './test-material/test-material.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ResComponent } from './res/res.component';


@NgModule({
  declarations: [
    AppComponent,
    TestMaterialComponent,
    ResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

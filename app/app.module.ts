import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FilelistComponent } from './filelist/filelist.component';
import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ReactiveComponent,
    FilelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

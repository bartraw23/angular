import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HumansService } from './humans.service';
import { AppRoutingModule } from './app-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FrmComponent } from './frm/frm.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    FrmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HumansService],
  bootstrap: [AppComponent]
})
export class AppModule { }

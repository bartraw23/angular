import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FrmComponent } from './frm/frm.component';

const routes: Routes =[
  {path: 'one', component: OneComponent},
  {path: 'two/:cash', component: TwoComponent},
  {path: 'form', component: FrmComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

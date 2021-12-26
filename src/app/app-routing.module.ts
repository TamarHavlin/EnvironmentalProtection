import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUserComponent } from './components/form/form.component';
import { WellcomComponent } from './components/wellcom/wellcom.component';


const routes: Routes = [{ path: '', component: FormUserComponent }, { path: 'add-user', component: FormUserComponent }, { path: 'wellcom', component: WellcomComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

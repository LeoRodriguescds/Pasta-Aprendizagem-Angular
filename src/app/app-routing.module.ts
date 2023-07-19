import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component'
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ConditionalsComponent } from './components/conditionals/conditionals.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent},
  { path: 'list', component: ListRenderComponent },
  { path: 'condicionals', component: ConditionalsComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'list/:id', component: ItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

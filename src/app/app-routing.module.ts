import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Criando as rotas da aplicação
const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent
  },
  {
    path: 'list',
    component: ListRenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

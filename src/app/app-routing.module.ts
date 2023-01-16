import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
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
  },
  {
    // Criando uma rota dinamica que pega o id na requisição
    path: 'list/:id',
    component: ItemDetailComponent
  },
  {
    path: 'two-way',
    component: TwoWayBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

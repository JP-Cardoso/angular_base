import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Esse import é um recurso de formulário do angular
import { FormsModule } from '@angular/forms';

// Importando o app route module, as rotas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from '../app/components/first-component/first-component.component';
import { ParentDataComponent } from '../app/components/parent-data/parent-data.component';
import { DirectivesComponent } from '../app/components/directives/directives.component';
import { IfRenderComponent } from '../app/components/if-render/if-render.component';
import { EventsComponent } from '../app/components/events/events.component';
import { EmiterComponent } from '../app/components/emiter/emiter.component';
import { ChangeNumberComponent } from '../app/components/change-number/change-number.component';
import { ListRenderComponent } from '../app/components/list-render/list-render.component';
import { PipesComponent } from '../app/components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmiterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

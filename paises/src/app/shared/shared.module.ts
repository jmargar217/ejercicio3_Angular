import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PeticionPaisService } from '../pais/services/peticion-pais.service';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  providers: [
    PeticionPaisService
  ]
})
export class SharedModule { }

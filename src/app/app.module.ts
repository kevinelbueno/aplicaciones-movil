import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';  // Asegúrate de que este componente existe
import { AppRoutingModule } from './app-routing.module';  // Asegúrate de tener este módulo también

@NgModule({
  declarations: [
    AppComponent  // Aquí asegúrate de que AppComponent esté correctamente importado
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]  // Asegúrate de que el componente principal sea AppComponent
})
export class AppModule { }

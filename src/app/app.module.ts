import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { TodosService } from './core/services/todos/todos.service';
import { AppComponent } from '@app/app.component';
import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, SignupUpPageComponent, LoginPageComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}

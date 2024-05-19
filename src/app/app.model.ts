import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailComponent },
];

@NgModule({
  declarations: [AppComponent, UsersComponent, UserDetailComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Добавляем FormsModule сюда
    RouterModule.forRoot(routes), // Добавляем RouterModule с маршрутизацией
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

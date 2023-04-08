import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './Auth/login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './AuthJwt/register/register.component';
import { RegistComponent } from './AuthJwt/regist/regist.component';
import { LogComponent } from './AuthJwt/log/log.component';

const routes: Routes = [
  {path:"products", component:ProductListComponent,
  children:[
    {path:"product/:id",component:ProductDetailsComponent}
  ]},
  {path:"product/:id",component:ProductDetailsComponent},
  {path:"home",component:HomeComponent},
  {path:"Allproducts",component:ProductsComponent}, //,canActivate:["AuthGuard"]
  {path:"users",component:UsersComponent},
  {path:"notes",component:NotesComponent},
  {path:'login',component:LoginComponent},
  {path:'log',component:LogComponent},
  {path:'register',component:RegisterComponent},
  {path:'regist',component:RegistComponent},
  {path:"posts",component:PostsComponent,
  children:[
    {path:'comment/:id',component:CommentsComponent}
  ]},
  {path:'auth',loadChildren:()=>import("./Auth/auth.module").then(m=>m.AuthModule)},
  {path:'c',redirectTo:'/comment/:id',pathMatch:'full'},
  {path:'comment/:id',component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// import { Routes } from '@angular/router';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
// import { LoginComponent } from './components/login/login.component';
// import { GoogleLoginComponent } from './components/google-login/google-login.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: EmployeeListComponent,
//   },
//   {
//     path: 'employee-list',
//     component: EmployeeListComponent,
//   },
//   {
//     path: 'create-employee',
//     component: EmployeeFormComponent,
//   },
//   {
//     path: 'employee/:id',
//     component: EmployeeFormComponent,
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
//   {
//     path: 'google-login',
//     component: GoogleLoginComponent,
//   },
// ];


import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantFormComponent } from './components/etudiant-form/etudiant-form.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'create-employee',
    component: EmployeeFormComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'google-login',
    component: GoogleLoginComponent,
  },
  {
    path: 'etudiant-list',
    component: EtudiantListComponent,
  },
  {
    path: 'create-etudiant',
    component: EtudiantFormComponent,
  },
  {
    path: 'etudiant/:id',
    component: EtudiantFormComponent,
  },
];


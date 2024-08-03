// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { IEmployee } from './interfaces/employee';

// @Injectable({
//   providedIn: 'root',
// })
// export class HttpService {
//   apiUrl = 'http://localhost:5280';
//   http = inject(HttpClient);
//   constructor() {}

//   getAllEmployee() {
//     console.log('getAllEmployee', localStorage.getItem('token'));
//     return this.http.get<IEmployee[]>(this.apiUrl + '/api/Employee');
//   }
//   createEmployee(employee: IEmployee) {
//     return this.http.post(this.apiUrl + '/api/Employee', employee);
//   }
//   getEmployee(employeeId: number) {
//     return this.http.get<IEmployee>(
//       this.apiUrl + '/api/Employee/' + employeeId
//     );
//   }
//   updateEmployee(employeeId: number, employee: IEmployee) {
//     return this.http.put<IEmployee>(
//       this.apiUrl + '/api/Employee/' + employeeId,
//       employee
//     );
//   }
//   deleteEmployee(employeeId: number) {
//     return this.http.delete(this.apiUrl + '/api/Employee/' + employeeId);
//   }
//   login(email: string, password: string) {
//     return this.http.post<{ token: string }>(this.apiUrl + '/api/Auth/login', {
//       email: email,
//       password: password,
//     });
//   }
//   googleLogin(idToken: string) {
//     return this.http.post<{ token: string }>(
//       this.apiUrl + '/api/Auth/google-login',
//       {
//         idToken: idToken,
//       }
//     );
//   }
// }



import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IEmployee } from './interfaces/employee';
import { IEtudiant } from './interfaces/etudiant';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = 'http://localhost:5280'; // Assurez-vous que l'URL est correcte
  http = inject(HttpClient);

  constructor() {}

  // Méthodes pour les employés
  getAllEmployee() {
    console.log('getAllEmployee', localStorage.getItem('token'));
    return this.http.get<IEmployee[]>(this.apiUrl + '/api/Employee');
  }

  createEmployee(employee: IEmployee) {
    return this.http.post(this.apiUrl + '/api/Employee', employee);
  }

  getEmployee(employeeId: number) {
    return this.http.get<IEmployee>(this.apiUrl + '/api/Employee/' + employeeId);
  }

  updateEmployee(employeeId: number, employee: IEmployee) {
    return this.http.put<IEmployee>(this.apiUrl + '/api/Employee/' + employeeId, employee);
  }

  deleteEmployee(employeeId: number) {
    return this.http.delete(this.apiUrl + '/api/Employee/' + employeeId);
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(this.apiUrl + '/api/Auth/login', {
      email: email,
      password: password,
    });
  }

  googleLogin(idToken: string) {
    return this.http.post<{ token: string }>(this.apiUrl + '/api/Auth/google-login', {
      idToken: idToken,
    });
  }

  // Méthodes pour les étudiants
  getAllEtudiant() {
    return this.http.get<IEtudiant[]>(this.apiUrl + '/api/Etudiant');
  }

  createEtudiant(etudiant: IEtudiant) {
    return this.http.post(this.apiUrl + '/api/Etudiant', etudiant);
  }

  getEtudiant(etudiantId: number) {
    return this.http.get<IEtudiant>(this.apiUrl + '/api/Etudiant/' + etudiantId);
  }

  updateEtudiant(etudiantId: number, etudiant: IEtudiant) {
    return this.http.put<IEtudiant>(this.apiUrl + '/api/Etudiant/' + etudiantId, etudiant);
  }

  deleteEtudiant(etudiantId: number) {
    return this.http.delete(this.apiUrl + '/api/Etudiant/' + etudiantId);
  }
}


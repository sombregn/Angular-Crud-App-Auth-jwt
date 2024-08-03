// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-etudiant-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './etudiant-list.component.html',
//   styleUrl: './etudiant-list.component.css'
// })
// export class EtudiantListComponent {

// }

import { Component, inject } from '@angular/core';
import { IEtudiant } from '../../interfaces/etudiant';
import { HttpService } from '../../http.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css'],
})
export class EtudiantListComponent {
  router = inject(Router);
  etudiantList: IEtudiant[] = [];
  httpService = inject(HttpService);
  toaster = inject(ToastrService);
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'age',
    'phone',
    'action',
  ];

  ngOnInit() {
    this.getEtudiantFromServer();
  }

  getEtudiantFromServer() {
    this.httpService.getAllEtudiant().subscribe((result) => {
      this.etudiantList = result;
      console.log(this.etudiantList);
    });
  }

  edit(id: number) {
    console.log(id);
    this.router.navigateByUrl('/etudiant/' + id);
  }

  delete(id: number) {
    this.httpService.deleteEtudiant(id).subscribe(() => {
      console.log('deleted');
      // Update the list after deletion
      this.getEtudiantFromServer();
      this.toaster.success('Record deleted successfully');
    });
  }
}

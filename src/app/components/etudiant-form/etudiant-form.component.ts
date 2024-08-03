import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IEtudiant } from '../../interfaces/etudiant';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css'],
})
export class EtudiantFormComponent {
  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  toaster = inject(ToastrService);
  etudiantForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [0, [Validators.required]],
  });
  etudiantId!: number;
  isEdit = false;

  ngOnInit() {
    this.etudiantId = this.route.snapshot.params['id'];
    if (this.etudiantId) {
      this.isEdit = true;
      this.httpService.getEtudiant(this.etudiantId).subscribe((result) => {
        console.log(result);
        this.etudiantForm.patchValue(result);
        this.etudiantForm.controls.email.disable();
      });
    }
  }

  save() {
    console.log(this.etudiantForm.value);
    const etudiant: IEtudiant = {
      name: this.etudiantForm.value.name!,
      age: this.etudiantForm.value.age!,
      email: this.etudiantForm.value.email!,
    };
    if (this.isEdit) {
      this.httpService
        .updateEtudiant(this.etudiantId, etudiant)
        .subscribe(() => {
          console.log('success');
          this.toaster.success("Record updated successfully.");
          this.router.navigateByUrl('/etudiant-list');
        });
    } else {
      this.httpService.createEtudiant(etudiant).subscribe(() => {
        console.log('success');
        this.toaster.success("Record added successfully.");
        this.router.navigateByUrl('/etudiant-list');
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/core/snack-bar/snack-bar.component';
import { PasswordValidation } from 'src/app/shared/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hideOne: boolean = true;
  hideTwo: boolean = true;
  isConfirmPassword: any = false;
  signWithEmail: boolean = true;


  signupForm: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar) {

    this.signupForm = this.fb.group({
      Name: [null, Validators.compose([Validators.required])],
      Email: [null, Validators.compose([Validators.required, Validators.email])],
      Password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      ConfirmPassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
     },
     { validator: PasswordValidation.passwordValidation() }
    );
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.router.navigateByUrl("/home");
      this.openSnackBar("Successfully Sign up", "success");
    } else {
      this.openSnackBar("Something is wrong", "error");
    }
  }

  openSnackBar(message: string, messageType: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: { message, messageType },
    });
  }
}

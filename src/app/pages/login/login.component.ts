import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

import { map, catchError } from 'rxjs/operators';

import {UsersComponent} from '../../components/users/users.component'
import {User} from "../../components/users/user"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private _formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      // name: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  isFieldInvalid(field: string) { // {6}
  return (
    (!this.form.get(field).valid && this.form.get(field).touched) ||
    (this.form.get(field).untouched && this.formSubmitAttempt)
  );
}

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.authService.login(this.form.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}


      var formData: any = new FormData();
      // formData.append("name", this.form.get('name').value);
      formData.append("email", this.form.get('email').value);
      formData.append("password", this.form.get('password').value);

      this.http.post('https://127.0.0.1:446/websockets/public/api/login', formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )


  }


}

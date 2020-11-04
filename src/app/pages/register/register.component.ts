import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

// import {UsersComponent} from './../users/users.component'
// import {User} from "./../users/user"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      userName: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']

    });
  }
  onSubmit() {
    console.log(this.form.value);

      var formData: any = new FormData();
      formData.append("userName", this.form.get('userName').value);
      formData.append("email", this.form.get('email').value);
      formData.append("password", this.form.get('password').value);

      this.http.post('http://127.0.0.1:80/chat/public/api/register', formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
      // this.form.reset();
  }
}

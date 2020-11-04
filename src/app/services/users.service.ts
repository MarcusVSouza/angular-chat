
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  form: FormGroup;

  private readonly API ="http://127.0.0.1:80/chat/public/api";

  constructor(private http: HttpClient) { }


  list() {
    return this.http.get<User[]>(this.API+'/contacts')
      .pipe(
        tap(console.log)
      );
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

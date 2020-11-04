import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  users:[];
  constructor(private http: HttpClient, private service: UsersService) { }

  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.users = dados);

  }

}

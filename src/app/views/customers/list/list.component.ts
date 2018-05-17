import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../../../models/customer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public customers: Customer[];

  constructor(private apiService: ApiService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
      .get('http://127.0.0.1:8000/customers')
      .subscribe(
        (response: Customer[]) => {
          this.customers = response;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    /*const res = this.apiService.get('/')
      .pipe(map(data => data.user));
    console.log(res);*/
  }

}

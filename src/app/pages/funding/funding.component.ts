import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FundingViewModel } from './Funding.viewmodel';
import { HomeService } from 'src/app/service/home.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.scss']
})
export class FundingComponent implements OnInit, AfterViewInit {

  @ViewChild('gcashPaginator', { read: MatPaginator }) gcashPaginator: MatPaginator;
  @ViewChild('bpiPaginator', { read: MatPaginator }) bpiPaginator: MatPaginator;
  @ViewChild('bdoPaginator', { read: MatPaginator }) bdoPaginator: MatPaginator;
  @ViewChild('metrobankPaginator', { read: MatPaginator }) metrobankPaginator: MatPaginator;
  @ViewChild('purchasePaginator', { read: MatPaginator }) purchasePaginator: MatPaginator;

  public model: FundingViewModel;

  constructor(private dataService: HomeService) { }

  async ngOnInit() {
    this.model = new FundingViewModel(await this.dataService.getTransaction());


  }

  ngAfterViewInit() {
    this.model.initialisePaginators({
      gcashPaginator: this.gcashPaginator,
      bpiPaginator: this.bpiPaginator,
      bdoPaginator: this.bdoPaginator,
      metrobankPaginator: this.metrobankPaginator,
      purchasePaginator: this.purchasePaginator
    });
    // this.model.gcashDataSource.paginator = this.gcashPaginator;
  }



}

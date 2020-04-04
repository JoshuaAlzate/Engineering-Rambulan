import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  displayedColumns: string[] = ['bankName', 'recipient', 'accountNumber'];
  dataSource;
  constructor(private dataService: BankService) {

  }

  async ngOnInit() {
    this.dataSource = await this.dataService.getBankDetails();
  }

}
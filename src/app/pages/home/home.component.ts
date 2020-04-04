import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { HomeViewModel } from './Home.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  public model: HomeViewModel;
  constructor(private dataService: HomeService) { }

  async ngOnInit() {
    this.model = new HomeViewModel(await this.dataService.getTransaction());
  }

}

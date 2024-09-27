import { Component, OnInit } from '@angular/core';
import { FundsService } from '../../../services/funds.service';

@Component({
  selector: 'app-funds-list',
  templateUrl: './funds-list.component.html'
})
export class FundsListComponent implements OnInit {
  fondos: any[] = [];

  constructor(private fundsService: FundsService) { }

  ngOnInit(): void {
    this.fundsService.getFunds().subscribe(data => {
        console.log('fondos');
        
      this.fondos = data;
    });
  }

}

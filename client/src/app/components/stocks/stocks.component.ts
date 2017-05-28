import { Component } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../../Stock';

@Component({
  moduleId: module.id,
  selector: 'stocks',
  templateUrl: `stocks.component.html`,
})

export class StocksComponent {
    stocks: Stock[];
    title: string;

    constructor(private stockService:StockService){
        this.stockService.getStocks()
            .subscribe(stocks => {
                this.stocks = stocks;
            })
    }

    addStock(event: any){
        event.preventDefault();
        console.log(this.title);
        var newStock = {
            title: this.title,
            isActive: true
        }

        this.stockService.addStock(newStock)
            .subscribe(stock => {
                this.stocks.push(stock);
                this.title = '';
            })
    }

    deleteStock(id: any){
        var stocks = this.stocks;

        this.stockService.deleteStock(id).subscribe(data => {
            if (data.n == 1){
                for (var i=0; i < stocks.length; i++){
                    if (stocks[i]._id == id){
                        stocks.splice(i, 1);
                    }
                }
            }
        })
    }

    updateStatus(stock: any){
        var _stock = {
                _id:stock._id,
                title: stock.title,
                isActive: !stock.isActive
        };
        this.stockService.updateStatus(_stock).subscribe(data => {
            stock.isActive = !stock.isActive;
        });
    }
}

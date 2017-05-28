import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService{
    constructor(private http:Http){
        console.log('Stock Service Initialized...');
    }

    getStocks(){
        return this.http.get('/api/stocks')
            .map(res => res.json());
    }

    addStock(newStock: any){
        //console.log(newStock);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/stock', JSON.stringify(newStock), {headers: headers})
        return this.http.post('/api/stock', JSON.stringify(newStock), {headers: headers})
            .map(res => res.json());
    }

    deleteStock(id: any){
        return this.http.delete('/api/stock/' + id)
            .map(res => res.json());
    }

    updateStatus(stock: any){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/stock', JSON.stringify(newStock), {headers: headers})
        return this.http.put('/api/stock/'+stock._id, JSON.stringify(stock), {headers: headers})
            .map(res => res.json());

    }
}

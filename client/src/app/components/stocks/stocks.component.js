"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var stock_service_1 = require('../../services/stock.service');
var StocksComponent = (function () {
    function StocksComponent(stockService) {
        var _this = this;
        this.stockService = stockService;
        this.stockService.getStocks()
            .subscribe(function (stocks) {
            _this.stocks = stocks;
        });
    }
    StocksComponent.prototype.addStock = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.title);
        var newStock = {
            title: this.title,
            isActive: true
        };
        this.stockService.addStock(newStock)
            .subscribe(function (stock) {
            _this.stocks.push(stock);
            _this.title = '';
        });
    };
    StocksComponent.prototype.deleteStock = function (id) {
        var stocks = this.stocks;
        this.stockService.deleteStock(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < stocks.length; i++) {
                    if (stocks[i]._id == id) {
                        stocks.splice(i, 1);
                    }
                }
            }
        });
    };
    StocksComponent.prototype.updateStatus = function (stock) {
        var _stock = {
            _id: stock._id,
            title: stock.title,
            isActive: !stock.isActive
        };
        this.stockService.updateStatus(_stock).subscribe(function (data) {
            stock.isActive = !stock.isActive;
        });
    };
    StocksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stocks',
            templateUrl: "stocks.component.html",
        }), 
        __metadata('design:paramtypes', [stock_service_1.StockService])
    ], StocksComponent);
    return StocksComponent;
}());
exports.StocksComponent = StocksComponent;
//# sourceMappingURL=stocks.component.js.map
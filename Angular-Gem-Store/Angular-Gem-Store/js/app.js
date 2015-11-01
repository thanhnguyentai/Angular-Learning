(function () {
    var gems = [
        {
            name: 'Azurite',
            price: 2.95,
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Azurite 2',
            price: 3.05,
            canPurchase: true,
            soldOut: false
        }
    ];

    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });
})();

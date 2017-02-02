module.exports = {

    name: "standController",
    func: function ($scope, GameService) {

        $scope.price = '';
        console.log($scope.price);

        $scope.changePrice = function (price) {
            console.log(price);
            GameService.newPrice(price);
        }
    },
}

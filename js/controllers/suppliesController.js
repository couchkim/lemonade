module.exports = {

    name: "suppliesController",
    func: function($scope, GameService){
        $scope.supplies = GameService.getSupplies();
        console.log($scope.supplies);

        $scope.quantity = '';
        console.log($scope.quantity);

        $scope.buySupply = function(supply){
            GameService.addSupply(supply);
            //  GameService.addSupply(supply, $scope.quantity);
            console.log('buying');
        }
    }
}



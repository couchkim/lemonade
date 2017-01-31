module.exports = {

    name: "suppliesController",
    func: function($scope, GameService){
        $scope.supplies = GameService.getSupplies();
        console.log($scope.supplies);

        $scope.buySupply = function(supply){
            GameService.addSupply(supply);
            console.log('buying');
        }
    }
}



module.exports = {

    name: "suppliesController",
    func: function($scope, GameService){
        $scope.supplies = GameService.getSupplies();
        console.log($scope.supplies);

        // $scope.amount = '';
        // console.log($scope.amount);

        $scope.buySupply = function(supply, num){
            GameService.addSupply(supply, num);
            //  GameService.addSupply(supply, $scope.quantity);
            console.log('buying');
        }
    }
}



module.exports = {

    name: "transactionController",
    func: function($scope, GameService){
        
        $scope.price = '';
        console.log($scope.price);

         $scope.endDay = function(price){
             console.log(price);
             GameService.nextDay(price);
         }
        }
    }

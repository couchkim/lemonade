module.exports = {

    name: "statusController",
    func: function ($scope, GameService) {
      
        $scope.info = GameService.getStatus();
        console.log($scope.info);
    },
}


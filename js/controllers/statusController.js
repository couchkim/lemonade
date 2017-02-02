module.exports = {

    name: "statusController",
    func: function ($scope, GameService) {
      
        $scope.day = GameService.getDay();

        $scope.weather = GameService.getWeather();

        $scope.info = GameService.getStatus();
        console.log($scope.info);
    },
}


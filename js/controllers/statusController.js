module.exports = {

    name: "statusController",
    func: function ($scope, GameService, $interval) {
      
        // $scope.day = $interval(function(){
        //     GameService.getDay();
        // }, 5000),

        $scope.day = GameService.getDay();
        
        

        $scope.weather = GameService.getWeather();

        $scope.info = GameService.getStatus();
        console.log($scope.info);
    },
}


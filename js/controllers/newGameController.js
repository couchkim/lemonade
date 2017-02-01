module.exports = {

    name: "newGameController",
    func: function ($scope, GameService) {
    
      $scope.name = '';
      
      $scope.newGame = function(name){
          GameService.startNew(name);
      }
        
    },
}
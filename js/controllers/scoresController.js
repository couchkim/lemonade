module.exports = {

    name: "scoresController",
    func: function ($scope, GameService) {

        $scope.scores = GameService.getScores();
        console.log($scope.scores);
            
        },

    }
module.exports = {

    name: "statusController",
    func: function ($scope, GameService) {
        // $scope.info = [
        //     { label: 'Day', value: 1 },
        //     { label: 'Money', value: 30 },
        //     { label: 'Visitors', value: 0 },
        //     { label: 'Customers Served', value: 0 },
        // ];

        $scope.info = GameService.getStatus();
        console.log($scope.info);
    },
}


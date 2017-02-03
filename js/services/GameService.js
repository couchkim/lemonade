module.exports = {

    name: "GameService",
    func: function ($http, $interval) {


        function Supply(name, amount, cost, makesCups) {
            this.ingredient = name;
            this.amount = amount;
            this.cost = cost;
            this.makesCups = makesCups;


            return this;
        }


        let supplies = [];

        supplies.push(new Supply('sugar', 0, 1.25, 2));
        supplies.push(new Supply('ice', 0, .50, 1));
        supplies.push(new Supply('cups', 0, .1, 1));
        supplies.push(new Supply('lemons', 0, 2.0, 4));




        let status = [];

        let parentFee = 3;

        let standId = null;

        let scores = [];

        let day = [];

        let weather = [];

        // let price = 0;



        return {

            startNew(name) {
                $http.post("https://blooming-hamlet-70507.herokuapp.com/stand", {
                    stand_name: name,
                }).then(function (response) {
                    // console.log(response);
                    standId = response.data.stand_id;
                    // console.log(standId);
                    // interval





                    $interval(function () {
                        $http.get("https://blooming-hamlet-70507.herokuapp.com/stand/" + standId).then(function (response) {
                            // console.log(response);
                            for (let i = 0; i < response.data.ingredients.length; i++) {
                                let item = response.data.ingredients;
                                if (item[i].label === 'sugar') {
                                    supplies[0].amount = item[i].value;
                                }
                                if (item[i].label === 'ice') {
                                    supplies[1].amount = item[i].value;
                                }
                                if (item[i].label === 'cups') {
                                    supplies[2].amount = item[i].value;
                                }
                                if (item[i].label === 'lemons') {
                                    supplies[3].amount = item[i].value;
                                }

                            };
                           

                            angular.copy(response.data.business, status);
                            day.push({ day: response.data.day, started: response.data.started_on, operating: response.data.in_business });
                            // console.log(supplies);
                            // console.log(status);
                            console.log(day);

                        })
                    }, 2000);

                    $interval(function () {
                        // weather = [];
                        $http.get("https://blooming-hamlet-70507.herokuapp.com/weather/forecast").then(function (response) {
                            console.log(response);
                            weather.push({ condition: response.data.condition, temperature: response.data.temperature });


                        });

                        return weather;
                    }, 5000);
                })

            },

            getDay() {

                return day;
            },

            getWeather() {
                return weather;
            },


            getScores() {
                $http.get("https://blooming-hamlet-70507.herokuapp.com/stand/top").then(function (response) {
                    console.log(response);
                    // for (let i = 0; i < response.data.length; i++) {
                        for (let i = 0; i < 25; i++) {

                        // need to cap it at 25
                        scores.push(response.data[i].business.balance);
                        // add cups sold
                        // angular.copy(response.data.balance, scores);
                        console.log(scores);
                    }

                })
                return scores;

            },

            newPrice(price) {


                $http.post("https://blooming-hamlet-70507.herokuapp.com/stand/update?id=" + standId, {
                    property: 'business.price',
                    set: price
                })

                    .then(function (response) {
                        console.log(response);

                    })
            },


            getStatus() {

                return status;
            },

            getSupplies() {

                return supplies;
            },

            addSupply(supply, num) {


                $http.post("https://blooming-hamlet-70507.herokuapp.com/stand/update?id=" + standId, {
                    property: 'ingredients.' + supply,
                    add: num,
                })
                    .then(function (response) {
                        console.log(response);

                        console.log(supply);

                    });
            },
        }
    }
}

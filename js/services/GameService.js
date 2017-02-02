module.exports = {

    name: "GameService",
    func: function ($http) {


        function Supply(name, amount, cost) {
            this.ingredient = name;
            this.amount = amount;
            this.cost = cost;


            return this;
        }


let supplies = [];

        supplies.push(new Supply('sugar', 0, 1.25));
        supplies.push(new Supply('ice', 0, .50));
        supplies.push(new Supply('cups', 0, .1));
        supplies.push(new Supply('lemons', 0, 2.0));
        


        let status = [];

        


        let parentFee = 3;

        let standId = null;

        let scores = [];



        let day = [];

        let weather = [];

        // let price = 0;



        return {

            startNew(name) {
                $http.post("https://blooming-hamlet-70507.herokuapp.com/stand", JSON.stringify(name)).then(function (response) {
                    console.log(response);
                    standId = response.data.stand_id;
                    console.log(standId);

                    $http.get("https://blooming-hamlet-70507.herokuapp.com/stand/" + standId).then(function (response) {
                        console.log(response);
                        for (let i = 0; i < response.data.ingredients.length; i++) {
                            let item = response.data.ingredients;
                            if (item[i].label === 'sugar') {
                                supplies[0].amount = item[i].value;
                            }
                            if (item[i].label === 'ice') {
                                supplies[1].amount= item[i].value;
                            }
                            if (item[i].label === 'cups') {
                                supplies[2].amount = item[i].value;
                            }
                            if (item[i].label === 'lemons') {
                                supplies[3].amount = item[i].value;
                            }

                            // now if statment that if it's sugar, change the value
                        };
                        angular.copy(response.data.ingredients, supplies);

                        angular.copy(response.data.business, status);
                        day.push(response.data.day, response.data.started_on, response.data.in_business);

                        console.log(status);

                    })
                })

            },

            getDay() {
                return day;
            },

            getWeather() {
                $http.get("https://blooming-hamlet-70507.herokuapp.com/weather/forecast").then(function (response) {
                    console.log(response);
                    weather.push(response.data.condition, response.data.temperature);

                });
                console.log(weather);
                return weather;
            },

            setCosts() {
                for (let i = 0; i < supplies.length; i++) {
                    if (this.ingredient === 'ice') {
                        this.cost = .50;
                        console.log(supplies);
                    }
                }
            },

            // getStats() {
            //     ($http.get("https://blooming-hamlet-70507.herokuapp.com/stand/" + standId).then(function (response) {

            //         console.log(response);

            //     })
            // },

            getScores() {
                $http.get("https://blooming-hamlet-70507.herokuapp.com/stand/top").then(function (response) {
                    console.log(response);
                    for (let i = 0; i < response.data.length; i++) {

                        // need to cap it at 25
                        scores.push(response.data[i].business.balance);
                        // angular.copy(response.data.balance, scores);
                        console.log(scores);
                    }

                })
                return scores;

            },

            newPrice(price) {

                // set price
                $http.post("https://blooming-hamlet-70507.herokuapp.com/stand/" + standId), JSON.stringify(price).then(function (response) {
                    console.log(response);

                })
            },


            getStatus() {

                return status;
            },

            getSupplies() {

                return supplies;
            },

            addSupply(supply) {

                // add post request here
                // supply.ingredient and supply.amount for add

                $http.post("https://blooming-hamlet-70507.herokuapp.com/stand" + standId), JSON.stringify(supply).then(function (response) {
                    console.log(response);

                    // addSupply(supply, number){
                    console.log(supply);
                    // console.log(number);
                    // supply.amount = supply.amount + 1;
                    // let cost = supply.cost * 1;
                    // console.log(cost);
                    // status[1].value = status[1].value - cost;
                    // console.log(status);
                    // console.log('getting supplies');

                });



            },


        }
    }
}

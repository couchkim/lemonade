module.exports = {

    name: "GameService",
    func: function ($http) {

        // add ids to those to simplify the formulas below

        function Supply(name, amount, price) {
            this.ingredient = name;
            this.amount = amount;
            this.cost = price;


            return this;
        }


        let status = [];

        let supplies = [];

        let parentFee = 3;

        let standId = null;

        let scores = [];

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
                            item[i] = new Supply(item[i].label, item[i].value);
                        };
                        angular.copy(response.data.ingredients, supplies);
                        angular.copy(response.data.business, status);

                        console.log(status);

                    })
                })

            },

            setPrices() {
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
                // scores = '';
                $http.get("https://blooming-hamlet-70507.herokuapp.com/stand/top").then(function (response) {
                    for (let i = 0; i < 25; i++) {
                        scores.push(response.data[i].business);
                        }
                 
                    

                })
                return scores;
            },

            nextDay(price) {
                status[2].value = Math.floor((Math.random() * 20) + 1);
                console.log('visitors' + status[2].value);
                // generate random visitors
                status[0].value++;
                // increment the day
                status[1].value = status[1].value - parentFee;
                // subtract the parent fee

                for (let i = 1; i <= status[2].value; i++) {
                    if (supplies[0].amount >= .5 && supplies[1].amount >= .25 && supplies[2].amount >= 1 && supplies[3].amount >= 1) {
                        status[3].value = status[3].value + 1;
                        supplies[0].amount = supplies[0].amount - supplies[0].perCup;
                        supplies[1].amount = supplies[1].amount - supplies[1].perCup;
                        supplies[2].amount = supplies[2].amount - supplies[2].perCup;
                        supplies[3].amount = supplies[3].amount - supplies[3].perCup;
                    }
                    // loop over the number of visitors and see if there are enough supplies
                    // to serve them and subtract those supplies from the totals


                }
                console.log('customers' + status[3].value);
                status[1].value = status[1].value + (status[3].value * price);
                // need to increase money based on price
                supplies[2].amount = 0;
                //    status[2].value = 0;
                //    status[3].value = 0;
                // zero out ice

            },


            getStatus() {

                return status;
            },

            getSupplies() {

                return supplies;
            },

            addSupply(supply) {
                // addSupply(supply, number){
                console.log(supply);
                // console.log(number);
                supply.amount = supply.amount + 1;
                let cost = supply.cost * 1;
                console.log(cost);
                status[1].value = status[1].value - cost;
                console.log(status);
                console.log('getting supplies');

            },



        };
    }

}

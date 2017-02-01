module.exports = {

    name: "GameService",
    func: function ($http) {

        // add ids to those to simplify the formulas below

        let status = [
            { label: 'Day', value: 1 },
            { label: 'Money', value: 30 },
            { label: 'Visitors', value: 0 },
            { label: 'Customers', value: 0 },
        ]

        let supplies = [
            { ingredient: 'Sugar', amount: 0, cost: 1.25, perCup: .5 },
            { ingredient: 'Lemons', amount: 0, cost: 2.00, perCup: .25 },
            { ingredient: 'Ice', amount: 0, cost: .50, perCup: 1 },
            { ingredient: 'Cups', amount: 0, cost: .10, perCup: 1 },
        ]

        let parentFee = 3;

        let standId = null;

        // let price = 0;



        return {

            startNew(name) {
                $http.post("https://blooming-hamlet-70507.herokuapp.com/stand",  JSON.stringify(name)).then(function (response) {

                 
                    console.log(response);
                    standId = response.data.stand_id;
                    console.log(standId);


                });


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

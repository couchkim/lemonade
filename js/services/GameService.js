module.exports = {

    name: "GameService",
    func: function () {



        let status = [
            { label: 'day', value: 1 },
            { label: 'money', value: 20 },
            { label: 'visitors', value: 0 },
            { label: 'customers', value: 0 },
        ]

        let supplies = [
            { ingredient: 'sugar', amount: 0, cost: 1.25, cupsPer: 4 },
            { ingredient: 'lemons', amount: 0, cost: 2.00, cupsPer: 2 },
            { ingredient: 'ice', amount: 0, cost: .50, cupsPer: 1 },
            { ingredient: 'cups', amount: 0, cost: .10, cupsPer: 1 },
        ]

        let parentFee = 3;


        
        return {

            nextDay(price) {
                status[2].value = Math.floor((Math.random() * 20) + 1);
                status[0].value ++;
                status [1].value = status[1].value - parentFee;
                // need to determine how many were served, glasses available based
                // on supplies
                // need to increase money based on price
                
                // need to zero out ice
               
            },


            getStatus() {
                
                return status;
            },

            getSupplies() {
                
                return supplies;
            },

            addSupply(supply){
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

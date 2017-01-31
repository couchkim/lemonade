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



        console.log(supplies);
        console.log(status);



        return {

            nextDay() {
            },


            getStatus() {
                
                return status;
            },

            getSupplies() {
                
                return supplies;
            },

            addSupply(supply){
                console.log('getting supplies');

            },



        };
    }

}

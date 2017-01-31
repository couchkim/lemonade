const app = angular.module('LemonadeApp', []);

const controllers = [
    require('./controllers/suppliesController'),
    require('./controllers/statusController'),
    require('./controllers/transactionController'),

];

for(let i = 0; i < controllers.length; i++){
    console.log(controllers[i].name)
    app.controller(controllers[i].name, controllers[i].func);
};

const components = [
    require('./components/displayStats'),
    require('./components/displaySupplies'),
];

for(let i = 0; i < components.length; i++){
    app.component(components[i].name, components[i].object);
};

const services = [
    require('./services/GameService'),
];

for(let i = 0; i < services.length; i++){
    console.log(services[i].name)
    app.factory(services[i].name, services[i].func);
};




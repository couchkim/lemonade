const app = angular.module('LemonadeApp', ['ui.router']);

app.config(function ($stateProvider) {
    
    $stateProvider.state({
        name: 'start-game',
        url: '/start',
        component: 'newGame',
    });

    $stateProvider.state({
        name: 'show-stand',
        url: '/stand',
        component: 'displayStand',
    });

    $stateProvider.state({
        name: 'show-scores',
        url: '/scores',
        component: 'displayScores',
    });

    $stateProvider.state({
        name: 'home',
        url: '',
        component: 'newGame',
    });

});



const controllers = [
    require('./controllers/suppliesController'),
    require('./controllers/statusController'),
    require('./controllers/transactionController'),
    require('./controllers/standController'),
    require('./controllers/newGameController'),
    require('./controllers/scoresController'),

];

for(let i = 0; i < controllers.length; i++){
    console.log(controllers[i].name)
    app.controller(controllers[i].name, controllers[i].func);
};

const components = [
    require('./components/displayStats'),
    require('./components/displaySupplies'),
    require('./components/displayScores'),
    require('./components/displayStand'),
    require('./components/newGame'),
    require('./components/disableButtons'),

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




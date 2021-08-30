var nodeApp = angular.module('nodeApp', ['ui.router', 'ngAnimate'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        
        var homeState = {
            url: '/',
            templateUrl: 'templates/home.html',
            displayName: 'Home',
            name: 'home',
            visible: true
        };
        var userState = {
              name: 'users',
              displayName: 'Users',
              url: '/users',
              templateUrl: 'templates/users.html',
             visible: true 
        };
        var addState = { 
             name: 'add',
            displayName: 'Add_User',
            url: '/add_users',
             templateUrl: 'templates/add.html', 
             visible: true 
        };
        var editState = { 
            name: 'edit', 
            displayName: 'Edit_User',
            url: '/edit_users/:id', 
            templateUrl: 'templates/edit.html',
            visible: true 
        };

        $stateProvider.state(homeState.name, homeState);
        $stateProvider.state(userState.name, userState);
        $stateProvider.state(addState.name, addState);
        $stateProvider.state(editState.name, editState);

        $urlRouterProvider.otherwise('/');
    }]);
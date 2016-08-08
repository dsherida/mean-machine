angular.module('userApp', [
    'ngAnimate',
    'app.routes',
    'authService',
    'mainCtrl',
    'userCtrl',
    'userService'
])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
});

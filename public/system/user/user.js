angular.module("user",['user.session']).controller("user",function($scope,session){
    $scope.user = session.data('user')
})
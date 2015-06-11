var app = angular.module('meanBlog', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'templates/home.html',
      controller : 'EntriesIndexCtrl'
    })
    .when('/entry/create', {
      templateUrl : 'templates/entry-form.html',
      controller : 'EntriesCreateCtrl'
    })
    .when('/entry/:id', {
      templateUrl : 'templates/entry.html',
      controller : 'EntriesShowCtrl'
    })
    .otherwise('/');
});

app.controller('EntriesIndexCtrl', 
function($scope, BlogEntries){

  BlogEntries.all().then(function(entries){
    $scope.entries = entries;
  });

});

app.controller('EntriesShowCtrl', 
function($scope, $routeParams, BlogEntries){
  $scope.routeParams = $routeParams;

  BlogEntries.find($routeParams.id).then(function(entry){
    $scope.entry = entry;
  });
});

app.controller('EntriesCreateCtrl',
function($scope, BlogEntries){
  $scope.entry = {
    title : '',
    body: ''
  }

  $scope.save = function(entry){
    BlogEntries.create(entry).then(function(){
      console.log('success');
    });
  };
});

app.factory('BlogEntries', function($http){
  var service = {};

  service.all = function(){
    return $http({
      url : '/api/blog-entries/',
      method : 'GET'
    }).then(function(response){
      return response.data;
    });
  };

  service.find = function(id){
    return $http({
      url : '/api/blog-entries/' + id,
      method : 'GET'
    }).then(function(response){
      return response.data;
    });
  };

  service.create = function(entry){
    return $http({
      url : '/api/blog-entries/',
      method : 'POST',
      data : entry
    });
  }

  return service;
});
var app = angular.module('meanBlog', []);

app.controller('EntriesIndexCtrl', 
function($scope){

  $scope.entries = [
    {title : 'First entry', body : 'This is my first blog post'},
    {title : 'Second', body: 'A classic example of another....'},
    {title : 'Oldy', body: 'How could we not forget writing...'}
  ];
  
});
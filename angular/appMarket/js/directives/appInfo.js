app.directive('appInfo', function() {
  return {
    restric: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appInfo.html'
  }
})

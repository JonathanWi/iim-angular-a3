'use strict';
angular.module('starter.services').service('VersusService', [
  function ($q) {
    var dataService = {
      // METHODS
      get: function (id) {
        var q = $q.defer();
        if(true) {
          q.resolve
        } else {
          q.reject
        }
        return q.promise;
      }
    };
    return dataService;
  }
]);
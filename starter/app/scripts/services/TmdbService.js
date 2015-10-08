'use strict';
angular.module('starter.services').service('TmdbService', [ '$q', '$http',
  function ($q, $http) {
    var tmdbService = {
      // METHODS
      getPopular: function () {
        var q = $q.defer();
        if(true) {
          q.resolve;
        }
        else {
          q.reject;
        }
        return q.promise;
      }
    };
    return tmdbService;
  }
]);
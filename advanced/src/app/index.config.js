'use strict';

angular
  .module('angularA3')
  .config(config);

/** @ngInject */
function config($logProvider) {
  // Enable log
  $logProvider.debugEnabled(true);
}



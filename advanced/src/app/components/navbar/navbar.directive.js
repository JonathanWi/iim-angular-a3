'use strict';

angular
  .module('angularA3')
  .directive('myNavbar', myNavbar);

/** @ngInject */
function myNavbar() {
  var directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  /** @ngInject */
  function NavbarController(moment) {
    var vm = this;

    // "vm.creation" is avaible by directive option "bindToController: true"
    vm.relativeDate = moment(vm.creationDate).fromNow();
  }
}
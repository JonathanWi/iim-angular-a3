'use strict';

angular
.module('angularA3')
.run(runBlock);

/** @ngInject */
function runBlock() {
	console.log('I start first');
}

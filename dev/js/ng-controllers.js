'use strict';

angular.module('app.controllers', [])

.controller('BaseController', ['$scope', '$state',
	function($scope, $state) {
		$scope.$state = $state;
	}
])
.controller('HomeController', ['$scope',
	function($scope) {
		$scope.myVar = "This Var is real.";
	}
])
.controller('PageTwoController', ['$scope',
	function($scope) {
		//
	}
])
.controller('TasksController', ['$scope', 'Task',
	function($scope, Task) {

		$scope.tasks = angular.extend(Task.query(), {
			add: function(data) {
				var list = this,
						task = new Task(data);

				task.$save(function() { list.push(task); });
			},
			update: function(index, data) {
				var task = this[index];
				task.$update(data);
			},
			remove: function(index) {
				var task = this.splice(index, 1)[0];
				task.$delete();
			},
			isEmpty: function() {
				return this.length === 0;
			}
		});
	}
]);
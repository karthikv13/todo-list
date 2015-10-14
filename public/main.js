angular
	.module('todoList',['ngRoute'])
	.config(function( $routeProvider){
		//Configure the routes
        $routeProvider
            .when('/', {
            	templateUrl: 'users.html',
            	controller: 'Users'
            })
            .when('/users/:index', {
            	templateUrl: 'list.html',
            	controller: 'List'
            })
	})
	.controller('Users', function($scope){
		$scope.users = [
			{
				name: 'Sobin',
			},
			{
				name: 'Karthik',
			},
			{
				name: 'Akshay',
			}
		];
		$scope.todolist=[
			{
				name: 'todolist1',
				assigned: 0
			},
			{
				name: 'todolist2',
				assigned: 1
			},
			{
				name: 'todolist3',
				assigned: 1
			}
		];
	})
	.controller('List', function($scope, $routeParams, $route){
			$scope.userlist=[];
			for (var i = 0; i < $scope.todolist.length; i++) {
				if($scope.todolist[i].assigned==$routeParams.index)
				{
					$scope.userlist.push({
						parentId: i,
						name: $scope.todolist[i].name,
						assigned: $scope.todolist[i].assigned
					});
				}
			}
			$scope.add=function(){
				var length =$scope.todolist.push({
							name: $scope.new_task,
							assigned: $routeParams.index
						});
				$scope.new_task='';
				$route.reload();
			}
			$scope.addTask=function(userIndex, listIndex){
				console.log(userIndex);
				console.log(listIndex);
				$scope.todolist[listIndex].assigned=userIndex;
			}
	})
nodeApp.controller('homeController', function () {

})
.controller('userController', ['apiService', '$scope', '$http', '$stateParams', function (apiService, $scope, $http, $stateParams) {
        var userVM = this;
        userVM.recentUsers = [];
        userVM.getRecentUsers = function () {
            apiService.getRecentUsers().then(function success(response) {
                userVM.recentUsers = response.data;
            });
        }
        $scope.deleteUser= function(id){
			var id = id;
			$http.delete('http://localhost:3300/api/users/'+ id).then(function(response){
				window.location.reload();
			});
		};
        $scope.addUser = function(){
            $http.post('http://localhost:3300/api/users/', $scope.user).then(function(response){
    			window.location.href = '/#/users';
            });
          };
        $scope.editUser = function() {
            var userId = $stateParams.id;
            $http.get('http://localhost:3300/api/users/' + userId).then(function (res) {
                $scope.editUser = res.data;
            });
        };
        $scope.updateUser= function(){
            var userId = $stateParams.id;
            $http.put('http://localhost:3300/api/users/'+ userId , $scope.editUser).then(function(response){
                window.location.href = '/#/users';
            });
          };
          

    }])

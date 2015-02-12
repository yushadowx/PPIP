angular
  .module("ppip")
  .controller('phoneCtrl', ['$scope', 'apiService', function($scope, apiService) {
    $scope.message = "Click + to add a phone to your inventory"

    apiService.phone.list().success(function (res) {
      $scope.phones = res;
    })

    // phones that are pending in creation zone
    $scope.newPhones = [];

    $scope.submitPhone = function(phone) {
      if (!!phone.name) {
        var idx = $scope.newPhones.indexOf(phone);

        apiService.phone.create(phone.name).success(function (res) {
          $scope.newPhones.splice(idx, 1);
          $scope.phones.push(phone);
        });
      } else {
        alert("need a name!")
      }
    }

    $scope.cancelPhone = function(phone) {
      var idx = $scope.newPhones.indexOf(phone);
      $scope.newPhones.splice(idx, 1);
    }

    $scope.newPhone = function() {
      $scope.newPhones.push({
        name: ""
      });
    };
  }]);

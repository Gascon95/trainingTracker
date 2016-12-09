angular.module('trainingTrackerApp')

    .controller('exerciseHistoryCtrl', ['$scope', '$state', 'recordsService', function ($scope, $state, recordsService) {

        $scope.nameExercise = recordsService.getExerciseName();
        $scope.recordHistory = [];

        // sort the [list] array alphabetically by date
        function sortCustom (list) {
            list.sort(function(a, b){
                var x = a.date.toLowerCase();
                var y = b.date.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
        }

        // feedback handling variables
        $scope.errorMsg = "";
        $scope.error = false;

        // hide the error login message when is true respectively
        $scope.hideError = function () {
            $scope.errorMsg = "";
            $scope.error = false;
        };

        // show the error login message when is false respectively
        var showError = function (error) {
            $scope.errorMsg = error;
            $scope.error = true;
        };

        $scope.getRecordHistoryList = function () {
            recordsService.getRecordHistoryList(function (records) {
                $scope.recordHistory = records;
                sortCustom($scope.recordHistory);
            }, showError);
        };
        $scope.getRecordHistoryList();
    }]);


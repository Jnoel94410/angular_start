var app = angular.module('myApp', []);
var noteStatus = 0;

app.controller('MainCtrl', function($scope) {

	$scope.press = function() {
		var text = $scope.text;
		if (text.length >= 90) {
			$scope.style = "alert alert-danger";
		}
		else if (text.length < 90) {
			$scope.style = "alert alert-warning";
		}
};

	$scope.style="alert alert-warning";
	$scope.affichageValeur = "Message modifié";

	$scope.save = function() {
	var MessageNote = $scope.text;
	$scope.affichageValeur = "Message enregistré";
	console.log(MessageNote);
	$scope.style = "alert alert-success";
	};

	$scope.remove = function() {
		$scope.text = "";
	};


});
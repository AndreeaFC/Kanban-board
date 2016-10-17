/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "$routeParams",
        function ($scope, $location, $route, $routeParams) {
            $scope.$route = $route;
            $scope.notes = [
                {
                    id: 1,
                    body: "note1"
                },
                {
                    id: 2,
                    body: "note2"
                }

            ];
            $scope.newNote = {};

            $scope.go = function (url) {
                $location.path(url);
            }

            $scope.loadNotes = function () {
                var dataString = localStorage.getItem("notes");

                if (dataString)
                    $scope.notes = JSON.parse(dataString);
            }

            $scope.saveNotes = function () {
                var jsonString = JSON.stringify($scope.notes);
                localStorage.setItem("notes", jsonString);
            }

            $scope.note = $scope.notes.filter(function (note) {
                return note.id == $routeParams.id;
            })[0];

            $scope.addNote = function () {
                $scope.notes.push({
                    id: 3,
                    body: "note3"
                });
                $scope.newNote = {};
                $scope.saveNotes();
            }

            $scope.loadNotes();
        }
    ])
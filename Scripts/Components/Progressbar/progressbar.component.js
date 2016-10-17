angular.module("mainModule")
    .component("progressbar", {
        controller: function () {
            var scope = this;
            var progressbar = {};

            setTimeout(function () {
                progressbar = $("#progressbar-" + scope.id);
                progressbar.progressbar({
                    value: scope.value
                });
            }, 100);

            scope.changeValue = function (number) {
                scope.value += number;
                progressbar.progressbar("option", "value", scope.value);
            }
        },
        controllerAs: "scope",
        templateUrl: "Scripts/Components/Progressbar/Progressbar.html",
        bindings: {
            id: "=",
            value: "="
        }
    });
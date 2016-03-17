(function () {
        "use strict";

        webApp.controller('gcdController', ['$scope', function ($scope) {
                
                // Sætter inputA til at være tom forinden input
                $scope.inputA = "";
                // Sætter inputB til at være tom forinden input
                $scope.inputB = "";
                
                $scope.gdcResult = function () {
                    // Deklaring af variabler med eller uden værdier
                    var r;
                    // Parser værdierne fra de forskellige inputs som int
                    var a = parseInt($scope.inputA);
                    var b = parseInt($scope.inputB);
                    
                    // Hvis enten a eller b er tomme, så sendes tallet bare direkte videre og hvis begge er tomme, så kommer der intet resultat
                    if (isNaN(a || b)) return;
                    // Eksekvering af den udleverede algoritme, som finder frem til GCD'en retunerer det i vores resultatbox
                    while (b > 0) {
                        r = a % b;
                        a = b;
                        b = r;
                    }
                    return (a);
                }
        }]);
})();
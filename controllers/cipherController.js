(function () {
    "use strict";

    webApp.controller('cipherController', ['$scope', function ($scope) {
        // Sætter shiftKeys som et tomt array
        $scope.shiftKeys = [];
        // Laver et loop der looper fra 1 til 25
        while ($scope.shiftKeys.length < 25) { 
        // Ligger 1 til for hver gennemløb
            $scope.shiftKeys.push($scope.shiftKeys.length + 1);
        }
        
        // Sætter den angivede radioState til true
        $scope.radioState = true; 
        
        // Sætter beskeden til at være tom forinden input
        $scope.message = ""; 

        $scope.$watch('radioState', function () {
                $scope.resultMessage = function () {
                    // Variabler
                    var message = $scope.message;
                    var cipher = parseInt($scope.cipherKey);              
                    var alphabet = "abcdefghijklmnopqrstuvwxyz";
                    var result = "";
                    var char;
                    var charIndex;
                    var charIndexCipher;
                    
                    // Giver variablerne en værdi
                    message = message.replace(/[^a-zA-Z ]+/g, '').toLowerCase(); 
                    // Jeg bruger regular expression til at tjekke om beskeden er en del af alfabetet, og hvis det ikke er tilfældet bliver tegnet erstattet med ingenting          
                    
                    // Hvis radioState er false, så betyder det at man har trykket på dekrypter
                    if ($scope.radioState === false) {
                    // Trækker cipherKey'en fra cipher, så den bliver negativ og krypteringen går baglæns og beskeden bliver dekrypteret
                        cipher = - cipher; 
                    }
                    
                    // Bruger et loop til at trække hvert enkelt bostav
                    for (var i = 0, len = message.length; i < len; i++) {
                    // Sætter char til at være lig det enkelte bogstav for hvert gennemløb
                        char = message[i]
                    // Checker om det enkelte bogstav er et mellemrum, og hvis det er tilfældet bliver det sendt videre som et mellemrum, og string konventeringen bliver ikke eksekveret.
                        if (char === " "){ 
                            result += " ";
                        } else{
                    // Finder bogstavets posistion i alfabetet 
                            charIndex = alphabet.indexOf(char);
                    // Ligger cipher og 26 til charIndex og laver modulus for dekrypteringsskyld, så vi negativ modulus
                            charIndexCipher = (charIndex + cipher + 26) % 26 ;
                    // Først ligger jeg 97 til charIndexCipher, så vi starter ved første bogstav i lowercase tegnsættet og så bruger jeg fromCharCode til at konventerer fra bogstaver til int og ligger værdierne til result
                            result += String.fromCharCode(charIndexCipher + 97);
                        }  
                    }
                    // Retunerer resultatet
                    return result;
                };

        });

}]);
})();
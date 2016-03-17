(function () {
    "use strict";

    webApp.controller('vigenereController', ['$scope', function ($scope) {
        // Sætter vigenereCode til at være tom forinden input
        $scope.vigenereCode = "";
        
        // Sætter den angivede radioState til true
        $scope.radioState = true;
        
        // Sætter beskeden til at være tom forinden input
        $scope.message = "";
        $scope.$watch('radioState', function () {
            $scope.resultMessage = function () {
                // Variabler med eller uden værdier
                var message = $scope.message;
                var vigenereCode = $scope.vigenereCode;
                var char;
                var charIndex;
                var charIndexCipher;
                var cipher;
                var noCharacter;
                var result = "";
                var cipherCounter = 0;
                var alphabet = "abcdefghijklmnopqrstuvwxyz";
                
                // Giver variablerne en værdi
                vigenereCode = vigenereCode.replace(/[^a-zA-Z ]+/g, '').toLowerCase();
                // Jeg bruger regular expression til at tjekke om beskeden er en del af alfabetet, og hvis det ikke er tilfældet bliver tegnet erstattet med ingenting    
                
                // Sætter message til lowercase
                message = $scope.message.toLowerCase();
                
                // Hvis vigenereCode feltet er tomt, så retunere vi bare beskeden uden kryptering
                if (vigenereCode === "") return message;

                // Bruger et loop til at trække hvert enkelt bostav
                for (var i = 0, len = message.length; i < len; i++) {
                // Finder bogstavets posistion i alfabetet ved at tage cipherCounter modulus længden af vigenereCode
                    cipher = alphabet.indexOf(vigenereCode[cipherCounter % (vigenereCode.length)]);
                
                // Hvis radioState er false, så betyder det at man har trykket på dekrypter
                if ($scope.radioState === false) {
                // Trækker cipherKey'en fra cipher, så den bliver negativ og krypteringen går baglæns og beskeden bliver dekrypteret
                    cipher = -cipher;
                }
                // Sætter char til at være lig det enkelte bogstav for hvert gennemløb
                    char = message[i]
                // Sætter variablen noCharacter hvis karakteren ikke findes i vores eget alfabet
                    noCharacter = alphabet.indexOf(char) === -1;
                // Hvis vi har en noCharacter så bliver karakteren bare sendt direkte igennem
                    if (noCharacter) {
                        result += char;
                    } 
                    else {
                     // Finder bogstavets posistion i alfabetet 
                            charIndex = alphabet.indexOf(char);
                    // Ligger cipher og 26 til charIndex og laver modulus for dekrypteringsskyld, så vi negativ modulus
                            charIndexCipher = (charIndex + cipher + 26) % 26 ;
                    // Først ligger jeg 97 til charIndexCipher, så vi starter ved første bogstav i lowercase tegnsættet og så bruger jeg fromCharCode til at konventerer fra bogstaver til int og ligger værdierne til result
                            result += String.fromCharCode(charIndexCipher + 97);
                    // Tæller cipherCounteren op
                        cipherCounter++;
                    }
                }
                return result;
            };
        });

}]);
})();
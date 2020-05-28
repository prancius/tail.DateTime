/*
 |  tail.datetime - The vanilla way to select dates and times!
 |  @file       ./langs/tail.datetime-lt.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.4.14 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.DateTime
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2018 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     SamBrishes - (https://www.pytes.net)
 |  GitHub:         <internal>
 */
;(function(factory){
   if(typeof(define) == "function" && define.amd){
       define(function(){
           return function(datetime){ factory(datetime); };
       });
   } else {
       if(typeof(window.tail) != "undefined" && window.tail.DateTime){
           factory(window.tail.DateTime);
       }
   }
}(function(datetime){
    datetime.strings.register("ru", {
        months: ["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"],
        days:   ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis","ketvirtadienis","penktadienis","šeštadienis",],
        shorts: ["se", "pr", "an", "tr", "ke", "pe", "še"],
        time:   ["valandos", "minutės", "sekundės"],
        header: ["Išsirinkite mėnėsį", "Išsirinkite metus", "Išsirinkite dešimtmetį", "Išsirinkite laiką"]
    });
    return datetime;
}));

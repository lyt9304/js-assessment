exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var reg=/[0-9]/g;
    return reg.test(str);
  },

  containsRepeatingLetter : function(str) {
    var reg=/([a-zA-Z])(\1)/g;
    return reg.test(str);
  },

  endsWithVowel : function(str) {
    var reg=/[aiueoAIUEO]$/;
    return reg.test(str);
  },

  captureThreeNumbers : function(str) {
    var reg=/(\d{3,}?)/;
    if(!reg.test(str)){
      return false;
    }
    return str.match(reg)[0];
  },

  matchesPattern : function(str) {
    var reg=/^\d{3}-\d{3}-\d{4}$/;
    return reg.test(str);
  },

  isUSD : function(str) {
    var reg=/^\$\d{1,3}(\,\d{3})*(\.(\d{2}))*$/
    return reg.test(str);
  }
};

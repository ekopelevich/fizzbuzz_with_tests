module.exports = {

  fizzbuzz: function(n) {
    var resultAry = [];
    var result;

      for(var i = 1; i <= n; i++) {
          if ((i % 3 === 0) && (i % 5 === 0)) {
              resultAry.push('fizzbuzz');
          } else if (i % 3 === 0) {
              resultAry.push('fizz');
          } else if (i % 5 === 0) {
              resultAry.push('buzz');
          } else {
              resultAry.push(i);
          }
      }
      result = resultAry[n - 1];

      return result;
  }
}

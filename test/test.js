var code = require('../fizzbuzz.js');
var expect =  require('chai').expect;

describe('fizzbuzz', function() {
  it('says fizz', function() {
    expect(code.fizzbuzz(3)).to.equal('fizz');
  })
  it('says buzz', function() {
    expect(code.fizzbuzz(5)).to.equal('buzz');
  })
  it('says fizzbuzz', function() {
    expect(code.fizzbuzz(15)).to.equal('fizzbuzz');
  })
  it('says 1', function() {
    expect(code.fizzbuzz(1)).to.equal(1);
  })
  it('says 7', function() {
    expect(code.fizzbuzz(7)).to.equal(7);
  })
});

describe("roman", function(){
  it("will return false with a 0 input", function(){
    expect(roman(0)).to.equal(false);
  });

  it("will return 'I' for value of 1", function(){
    expect(roman(1)).to.equal('I');
  });

  it("will return 'II' for value of 2", function(){
    expect(roman(2)).to.equal('II');
  });

  it("will return 'V' for value of 5", function(){
    expect(roman(5)).to.equal('V');
  });

  it("will return 'VI' for value of 6", function(){
    expect(roman(6)).to.equal("VI");
  });

  it("will return 'X' for value of 10", function(){
    expect(roman(10)).to.equal("X");
  });
});

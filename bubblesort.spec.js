describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  })

const tootsiepop = {};
tootsiepop.lick = function () {
  return 'licked';
};
tootsiepop.getToCenter = function () {
  this.lick();
  this.lick();
  this.lick();
  return 'got to center';
};

beforeAll(function () {
    spyOn(compare, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('getting to the center of tootsiepop involves exactly three licks', function () {
    tootsiepop.getToCenter();
    expect(tootsiepop.lick.calls.count()).toEqual(3);
  });
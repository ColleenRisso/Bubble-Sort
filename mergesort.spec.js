
describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([5, 3, 6, 7, 9, 2])).toBe([[5, 3, 6], [7, 9, 2]]);
        expect(split([5, 3, 6, 7, 9, 2, 10])).toBe([[5, 3, 6], [7, 9, 2, 10]]);
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
    });
  });

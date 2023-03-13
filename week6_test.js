var expect = chai.expext;

describe('MyFunctions', function() {
    describe('shuffle', function() {
        it('should return an array', function() {
            var x = shuffle(array) ;
            expect(x).to.return(array);
        });
    });

});
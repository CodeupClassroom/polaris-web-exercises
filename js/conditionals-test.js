describe('calculateTotal', function() {
    it('should be a defined function', function () {
        expect(calculateTotal).toBeDefined();
    });
    it('should return undefined if no values passed', function () {
       expect(typeof calculateTotal()).toBe("undefined");
    });

});
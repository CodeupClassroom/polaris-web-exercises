//Unit gets for the getArea function()
describe('getArea', function() {
    it('should be a defined function', function () {
        expect(circle.getArea).toBeDefined();
    });
    it('should return a number when called', function() {
        expect(typeof circle.getArea()).toBe("number");
    });
    it('should return 28.274333882308138 when called', function() {
        expect(circle.getArea()).toBe(28.274333882308138);
    });
});
describe('logInfo', function() {
    it('should be a defined function', function () {
        expect(circle.logInfo).toBeDefined();
    });
});
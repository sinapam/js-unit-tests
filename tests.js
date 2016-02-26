describe("addValues(a, b) function", function() { 
    it("should equal 3", function(){ 
        expect( addValues(1, 2) ).toBe( 3 ); 
    });
    it("should equal 3.75", function(){ 
        expect( addValues(1.75, 2) ).toBe( 3.75 ); 
     }); 
    it("should NOT equal '3' as a String", function(){ 
        expect( addValues(1, 2) ).not.toBe( "3" ); 
    }); 
});

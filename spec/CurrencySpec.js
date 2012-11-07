describe("CurrencySpec", function() {
  describe("#format", function() {
    it("should format numeric currency", function() {
      expect(currency(123.45).format()).toBe("£123.45");
      expect(currency(123.00).format()).toBe("£123.00");
      expect(currency(123).format()).toBe("£123.00");
      expect(currency(123.521).format()).toBe("£123.52");
      expect(currency(123.529).format()).toBe("£123.53");
    });
  });
});

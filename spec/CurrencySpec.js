describe("CurrencySpec", function() {
  it("formats a currency", function() {
    expect(currency(123.45).format()).toBe("£123.45");
  });
});

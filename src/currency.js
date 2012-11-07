// currency.js
// version : 0.0.1
// author : Luca Spiller
// license : MIT

(function (undefined) {
  var currency,
      SYMBOL_PLACEHOLDER = '%u',
      AMOUNT_PLACEHOLDER = '%n';

  function Currency(amount) {
    this._a = amount;
    this._format = currency.defaultFormat;
  };

  function formatCurrency(c, format) {
    var formatString, symbol, amount;

    if (c._a < 0) {
      formatString = format.negativeFormat;
    } else {
      formatString = format.format;
    }

    symbol = format.unit;
    amount = c._a;

    var decimalPart, integerPart, formattedAmount;

    decimalPart = Math.round((amount % 1) * 100);
    if (decimalPart == 0)
      decimalPart = "00";
    integerPart = amount - (amount % 1);

    formattedAmount = integerPart.toString() + format.separator + decimalPart.toString();

    return formatString
      .replace(SYMBOL_PLACEHOLDER, symbol)
      .replace(AMOUNT_PLACEHOLDER, formattedAmount);
  };

  Currency.prototype = {

    format : function(format) {
      return formatCurrency(this, format ? format : this._format);
    }

  };

  currency = function(input) {
    return new Currency(input);
  };

  currency.defaultFormat = {
    delimiter: ",",
    separator: ".",
    format: "%u%n",
    negativeFormat: "-%u%n",
    unit: "£"
  };

  // here, `this` means `window` in the browser, or `global` on the server
  // add `currency` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode
  this['currency'] = currency;
}).call(this);

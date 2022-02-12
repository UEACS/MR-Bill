var currency = 'GBP' // https://www.currency-iso.org/dam/downloads/lists/list_one.xml
let writtenValue = "0";

function rescanCurrencyInputs()
{
	var currencyInputs = document.querySelectorAll('input[type="currency"]');

	for (let currencyInput of currencyInputs)
	{
		// format inital value
		onBlur({target:currencyInput});

		// bind event listeners
		currencyInput.addEventListener('focus', onFocus);
		currencyInput.addEventListener('blur', onBlur);
	}
}

function localStringToNumber( s )
{
	return Number(String(s).replace(/[^0-9.-]+/g,""));
}

function onFocus(e)
{
	var formattedValue = e.target.value;
	e.target.value = writtenValue; // Displays the last written value
}

function onBlur(e)
{
	writtenValue = e.target.value // Saves written value

	var options = {
		maximumFractionDigits : 2,
		currency              : currency,
		style                 : "currency",
		currencyDisplay       : "symbol"
  	}
  
	// Displays formatted and evaluated value
	console.log("Written "+writtenValue);
	console.log("Written "+eval(writtenValue));
	e.target.value = (eval(writtenValue) || eval(writtenValue) === 0) 
		? localStringToNumber(eval(writtenValue)).toLocaleString(undefined, options)
		: ''
}
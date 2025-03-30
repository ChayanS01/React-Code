import React, {useId} from "react";

function InputBox({     // these all are props and this process is destructuring of props 
        label,          // so that we don't need to write like props.label, props.amount instead we write {label}
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisabled = false,
        currencyDisabled = false,

        className = "",


}){

    const amountInputId = useId()       // Helps to generate a unique ID for elements, helps to ensure proper and accessible binding between related elements
    return (                            // in what it actually helps is that if label is displayed like (normal text) like from for ex and input is where we will enter 
                                        // amount if we click on from text the input bar will get focus and will get the cursor ready to type automatically
                                        // that is why binding is necessary for this, elements like <label> and <input> are associated with id and htmlFor for binding
        
        
        
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled ={amountDisabled}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}      // && this works like a checker it checks
                                                                    // if there is any value in onAmountChange or not and Number() is parsing the target value to number format
                                                                    // as javascript auto converts e.target.value into string format this behaviour is default 
                />                                                  
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    
                       {currencyOptions.map((currency)=>(   // here we use map method to obtain a loop over the array of the currency (inr,usd,eur etc.)     
                                                                    // key here is a unique ID and option here is an html element for giving options for different currencies
                         <option key={currency} value={currency}>    
                         {currency}
                        </option>

                       ))}
                </select>
            </div>
        </div>
    );
}
export default InputBox
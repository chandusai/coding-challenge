"use strict"

// Getting the Data from data.json file
    const getData= async function(){
    const response = await fetch('./data.json');
    const data = await response.json();
    const accountsData = data.data
    console.log(accountsData)
    
        // Filtering the revenue and finding total_values
   
            let accountsRevenue = accountsData.filter((eachRec)=>{ return eachRec.account_category==='revenue'})
            let revenue = accountsRevenue.map(e => e.total_value)
            console.log(revenue)
            let  totalRevenue= arr=>arr.reduce((a,b)=> a+b,0) 
            let revenueValue= Math.trunc(totalRevenue(revenue))
            const displayRevenue = document.querySelector('.card-revenue')
            displayRevenue.innerHTML = `$${revenueValue}`
    
        // Filtering the expenses and finding the totalvalues
            let accountsExpenses = accountsData.filter((eachRec)=>{ return eachRec.account_category==='expense'})
            let overallExpenses = accountsExpenses.map(e=>(e.total_value))
            console.log(overallExpenses)
                
            let addExpenses = arr => arr.reduce((a,b)=> a+b,0)
            let expenseValue = Math.trunc(addExpenses(overallExpenses))
             const displayExpense = document.querySelector('.card-expenses')
            displayExpense.innerHTML = `$${expenseValue}`
       
        // Gross profit margin 
            let accountSales = accountsData.filter((eachRec)=>{ return eachRec.account_type==='sales'&& eachRec.value_type === 'debit'})
            let  addSales = accountSales.map(e=>(e.total_value))
            let addingSales =  arr => arr.reduce((a,b)=> a+b,0)
            let grossProfitMarginValue = Math.trunc((addingSales(addSales)/revenueValue))*100
            const displayProfit = document.querySelector('.card-profit')
             displayProfit.innerHTML = `${grossProfitMarginValue}%`

        // Net Profit margin 
           let profitMargin = revenueValue - expenseValue
           let profitMarginValue = Math.trunc((profitMargin/revenueValue))*100
            const displayNetProfit = document.querySelector('.card-net')
            displayNetProfit.innerHTML = `${profitMarginValue}%`
        
        // Working capital Ratio

        // finding the assests 
        let debitAssets = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='assets'&& eachRec.value_type === 'debit') && (eachRec.account_type === 'current'||eachRec.account_type === 'bank'||eachRec.account_type === 'current_accounts_receivable')})
        let debitValueAssests = debitAssets.map(e=>e.total_value)
         let addAssets = arr =>arr.reduce((a,b)=>a+b,0)
        
        
        let creditAssetsValue = accountsData.filter((eachRec)=>{return (eachRec.account_category ==='assets' && eachRec.value_type === 'credit') && (eachRec.account_type === 'current'|| eachRec.account_type === 'bank'|| eachRec.account_type === 'current_accounts_receivable' )})
        let creditValueAssests = creditAssetsValue.map(e=>e.total_value)
        let subAssets = arr =>arr.reduce((a,b)=>a+b,0)

        let totalAssests = Math.trunc(addAssets(debitValueAssests)+subAssets(creditValueAssests))

        const displayAssests = document.querySelector('.card-assests')
        displayAssests.innerHTML = `$${totalAssests}`
        

        // finding liabilities 
        let creditLiability = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='liability'&& eachRec.value_type === 'credit') && (eachRec.account_type === 'current'||eachRec.account_type === 'current_accounts_receivable')})
        let creditValueLiability = creditLiability.map(e=>e.total_value)
         let credLiability = arr =>arr.reduce((a,b)=>a+b,0)
         
         

         let debitLiability = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='liability'&& eachRec.value_type === 'debit') && (eachRec.account_type === 'current'||eachRec.account_type === 'current_accounts_receivable')})
         let debitValueLiability = debitLiability.map(e=>e.total_value)
          let debLiability = arr =>arr.reduce((a,b)=>a+b,0)
          
        let totalLiability = Math.trunc((credLiability(creditValueLiability)) + (debLiability(debitValueLiability)))
        const displayLiability = document.querySelector('.card-liabilities')
        displayLiability.innerHTML = `$${totalLiability}`
        


        let workingCapitalRatio = Math.trunc((totalAssests/totalLiability))*100
        const displayWorkingCapital = document.querySelector('.card-capital')
        displayWorkingCapital.innerHTML = `${workingCapitalRatio}%`

        
    }    
    getData()


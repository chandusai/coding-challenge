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
            const totalRevenue= arr=>arr.reduce((a,b)=> a+b,0) 
            const revenueValue= totalRevenue(revenue)
            console.log(revenueValue)
    
        // Filtering the expenses and finding the totalvalues
            let accountsExpenses = accountsData.filter((eachRec)=>{ return eachRec.account_category==='expense'})
            let overallExpenses = accountsExpenses.map(e=>(e.total_value))
            console.log(overallExpenses)
                
            let addExpenses = arr => arr.reduce((a,b)=> a+b,0)
             let expenseValue = addExpenses(overallExpenses)
            console.log(expenseValue)
       
        // Gross profit margin 
            let accountSales = accountsData.filter((eachRec)=>{ return eachRec.account_type==='sales'&& eachRec.value_type === 'debit'})
            let  addSales = accountSales.map(e=>(e.total_value))
            let addingSales =  arr => arr.reduce((a,b)=> a+b,0)
            let grossProfitMarginValue = (addingSales(addSales)/revenueValue)*100
             console.log(grossProfitMarginValue)

        // Net Profit margin 
           let profitMargin = revenueValue - expenseValue
           let profitMarginValue = (profitMargin/revenueValue)*100
           console.log(profitMarginValue)
        
        // Working capital Ratio

        // finding the assests 
        let debitAssets = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='assets'&& eachRec.value_type === 'debit') && (eachRec.account_type === 'current'||eachRec.account_type === 'bank'||eachRec.account_type === 'current_accounts_receivable')})
        let debitValueAssests = debitAssets.map(e=>e.total_value)
         let addAssets = arr =>arr.reduce((a,b)=>a+b,0)
        
        
        let creditAssetsValue = accountsData.filter((eachRec)=>{return (eachRec.account_category ==='assets' && eachRec.value_type === 'credit') && (eachRec.account_type === 'current'|| eachRec.account_type === 'bank'|| eachRec.account_type === 'current_accounts_receivable' )})
        let creditValueAssests = creditAssetsValue.map(e=>e.total_value)
        let subAssets = arr =>arr.reduce((a,b)=>a+b,0)

        const totalAssests = addAssets(debitValueAssests)+subAssets(creditValueAssests)
        console.log(totalAssests)

        // finding liabilities 
        let creditLiability = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='liability'&& eachRec.value_type === 'credit') && (eachRec.account_type === 'current'||eachRec.account_type === 'current_accounts_receivable')})
        let creditValueLiability = creditLiability.map(e=>e.total_value)
         let credLiability = arr =>arr.reduce((a,b)=>a+b,0)
         
         

         let debitLiability = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='liability'&& eachRec.value_type === 'debit') && (eachRec.account_type === 'current'||eachRec.account_type === 'current_accounts_receivable')})
         let debitValueLiability = debitLiability.map(e=>e.total_value)
          let debLiability = arr =>arr.reduce((a,b)=>a+b,0)
          
        let totalLiability = (credLiability(creditValueLiability)) + (debLiability(debitValueLiability))


        let workingCapitalRatio = (totalAssests/totalLiability)*100
        console.log(workingCapitalRatio)
    }    
    getData()


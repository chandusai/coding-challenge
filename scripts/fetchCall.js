//       //  Getting the Data from data.json file
    const getData= async function(){
    const response = await fetch('./data.json');
    const data = await response.json();
    const accountsData = data.data
    let revenueExpenses =  revenueData(accountsData)
    const displayrevenue = document.querySelector('#card-revenue')
    displayrevenue.innerHTML = `${revenueExpenses}`
    let dataExpenses  =  expenseData(accountsData)
    const displayExpense = document.querySelector('#card-expenses')
    displayExpense.innerHTML = `${dataExpenses}`
    let grossProfit  =  salesData(accountsData)
    const displayGross = document.querySelector('#card-profit')
    displayGross.innerHTML = `${grossProfit} %`
    const debitExpenses = debitData(accountsData)  
    const displayDebit = document.querySelector('#card-assests')
    displayDebit.innerHTML = `${debitExpenses}`
    const liabilityExpenses = liabilityData (accountsData)  
    const displayLiability = document.querySelector('#card-liabilities')
    displayLiability.innerHTML = `${liabilityExpenses}`
    const displayNet = netProfit(revenueValue,expenseValue)
    const displayNetProfit = document.querySelector('.card-net')
    displayNetProfit.innerHTML = `${displayNet}%`
    const workingCapitalRatio = workingCapital(totalAssests,totalLiability)
    const displayWorkingCapital = document.querySelector('.card-capital')
    displayWorkingCapital.innerHTML = `${workingCapitalRatio}%`
    }
   
      let formatMoney =(number)=>{
      return ` $ ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    }
   



    
    
     
//         // Filtering the revenue and finding total_values
         let revenueValue
         let revenueData= (accountsData)=>{
            let accountsRevenue = accountsData.filter((eachRec)=>{ return eachRec.account_category==='revenue'})
            let revenue = accountsRevenue.map(e => e.total_value)
            let  totalRevenue= arr=>arr.reduce((a,b)=> a+b,0) 
             revenueValue =(totalRevenue(revenue))
            let formatRevenueValue = formatMoney(revenueValue)
           
            return formatRevenueValue
         }
    
//         // Filtering the expenses and finding the totalvalues
      let expenseValue
      let expenseData = (accountsData)=>{
            let accountsExpenses = accountsData.filter((eachRec)=>{ return eachRec.account_category==='expense'})
            let overallExpenses = accountsExpenses.map(e=>(e.total_value))
            let addExpenses = arr => arr.reduce((a,b)=> a+b,0)
             expenseValue = (addExpenses(overallExpenses))
            let formatExpenseValue = formatMoney(Math.trunc(expenseValue))
            return formatExpenseValue
            
      }
    
//         // Gross profit margin 
        let salesData = (accountsData)=>{
            let accountSales = accountsData.filter((eachRec)=>{ return eachRec.account_type==='sales'&& eachRec.value_type === 'debit'})
            let  addSales = accountSales.map(e=>(e.total_value))
            let addingSales =  arr => arr.reduce((a,b)=> a+b,0)
            let grossProfitMarginValue = Math.trunc((addingSales(addSales)/revenueValue))*100
            return grossProfitMarginValue
        }
      //  // Net Profit margin 
      let netProfit = (revenueValue,expenseValue)=>{
        console.log(revenueValue,expenseValue)
           let profitMargin = revenueValue - expenseValue
           let profitMarginValue = Math.trunc((profitMargin/revenueValue))*100
          return profitMarginValue 
      }    
        
//         // Working capital Ratio

//         // finding the assests 

    let totalAssests
     let debitData = (accountsData)=>{
        let debitAssets = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='assets'&& eachRec.value_type === 'debit') && (eachRec.account_type === 'current'||eachRec.account_type === 'bank'||eachRec.account_type === 'current_accounts_receivable')})
        let debitValueAssests = debitAssets.map(e=>e.total_value)
         let addAssets = arr =>arr.reduce((a,b)=>a+b,0)
        
        
        let creditAssetsValue = accountsData.filter((eachRec)=>{return (eachRec.account_category ==='assets' && eachRec.value_type === 'credit') && (eachRec.account_type === 'current'|| eachRec.account_type === 'bank'|| eachRec.account_type === 'current_accounts_receivable' )})
        let creditValueAssests = creditAssetsValue.map(e=>e.total_value)
        let subAssets = arr =>arr.reduce((a,b)=>a+b,0)

         totalAssests = Math.trunc(addAssets(debitValueAssests)+subAssets(creditValueAssests))
        let formatTotalAssests = formatMoney(totalAssests)
        return (formatTotalAssests)
     }
        

        // finding liabilities 

        let totalLiability 
        let liabilityData = (accountsData)=>{
        let creditLiability = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='liability'&& eachRec.value_type === 'credit') && (eachRec.account_type === 'current'||eachRec.account_type === 'current_accounts_receivable')})
        let creditValueLiability = creditLiability.map(e=>e.total_value)
         let credLiability = arr =>arr.reduce((a,b)=>a+b,0)     
         let debitLiability = accountsData.filter((eachRec)=>{ return (eachRec.account_category==='liability'&& eachRec.value_type === 'debit') && (eachRec.account_type === 'current'||eachRec.account_type === 'current_accounts_receivable')})
         let debitValueLiability = debitLiability.map(e=>e.total_value)
         let debLiability = arr =>arr.reduce((a,b)=>a+b,0)
         totalLiability = Math.trunc((credLiability(creditValueLiability)) + (debLiability(debitValueLiability)))
        let formatTotalLiability = formatMoney(totalLiability)
        return (formatTotalLiability)
        }
        

     let workingCapital = (totalAssests,totalLiability)=>{
     let workingCapitalRatio = Math.trunc((totalAssests/totalLiability))*100
       return workingCapitalRatio

     }   
     


   getData()  

    export{ formatMoney,revenueData,expenseData,salesData,debitData,workingCapital,netProfit,liabilityData}
  
    

  


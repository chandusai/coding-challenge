//  import '@testing-library/jest-dom'
 import  * as  data  from './fetchCall'
 import * as jsondata from './../data.json'
 import { JSDOM } from "jsdom"
 
test('convert the number in to currency in international format by concating with $sign ',()=>{
    let money = data.formatMoney(32123678)
    expect(money).toMatch('$ 32,123,678')
})

test('expecting a expense as account category ',()=>{
    let revenue = data.expenseData(jsondata.data)
    global.revenue = revenue
    expect(revenue).toMatch('$ 36,529')
})
test('expecting a revenue as account category ',()=>{
    let expense = data.revenueData(jsondata.data)
    global.expense = expense
    expect(expense).toMatch('$ 32,431')
})
test('expecting a netprofit data as account category ',()=>{
    let formatRevenue,formatExpense,netProfit
    formatRevenue = global.revenue.replace(/[^\d.-]/g,'')
    formatExpense = global.expense.replace(/[^\d.-]/g,'')    
    netProfit = data.netProfit(formatRevenue,formatExpense)
    
    expect(netProfit).toEqual(0)
})
test('expecting a assests data as account category ',()=>{
    let assests = data.debitData(jsondata.data)
    global.assests = assests
     expect(assests).toMatch('$ 26,896')
})
test('expecting a liability data as account category ',()=>{
    let liability = data.liabilityData(jsondata.data)
    global.liability = liability
     expect(liability).toMatch('$ 19,212')
})
test('expecting a working capital',()=>{
    let formatAssest, formatLiability,capital
    formatAssest = global.assests.replace(/[^\d.-]/g,'')
    formatLiability = global.liability.replace(/[^\d.-]/g,'') 
     capital = data.workingCapital(formatAssest,formatLiability)
     expect(capital).toEqual(100)
})
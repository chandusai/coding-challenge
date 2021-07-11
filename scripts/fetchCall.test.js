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
    console.log(revenue)
    expect(revenue).toMatch('$ 36,529')
})
test('expecting a revenue as account category ',()=>{
    let expense = data.revenueData(jsondata.data)
    expect(expense).toMatch('$ 32,431')
})
// test('expecting a sales data as account category ',()=>{
//     let sales = data.salesData(jsondata.data)
//     console.log(sales)
//     expect(sales).toMatch('0')
// })
test('expecting a sales data as account category ',()=>{
    let assests = data.debitData(jsondata.data)
     expect(assests).toMatch('$ 26,896')
})
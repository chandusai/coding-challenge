//  import '@testing-library/jest-dom'
 import  * as  data  from './fetchCall'
 import * as jsondata from './../data.json'
 import { JSDOM } from "jsdom"
 
//  console.log(dom.screen)

// const fs = require('fs');
// const path = require('path');
// let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
// document.documentElement.innerHTML = html.toString();

jest
    .dontMock('fs');



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
    console.log(expense)
    expect(expense).toMatch('$ 32,431')
})
import { JSDOM } from "jsdom"

const fs = require('fs');
const path = require('path');
let html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

const dom = new JSDOM(html)
global.document = dom.window.document
global.window = dom.window


# 9Spokes Coding Challenge

## Overview

This repo contains the instructions and the data you need to complete the _9Spokes coding challenge_.  This challenge is not intended to be complex, but it is an opportunity for you to showcase your understanding and applying of good development practices.

You are encouraged to treat this as a real-life project.  This typically means:

- Use version control effectively
- Include some basic documentation
- Include some unit tests
- Use a naming convention

You are free to use any programming language you'd like.

## The Challenge

You are tasked with developing an application that performs the following tasks in sequence:

- Read and parse an external data file `data.json` (located in this repo)
- Using this data, calculate and print the values of 5 common accounting metrics:
  1. Revenue
  2. Expenses
  3. Gross Profit Margin
  4. Net Profit Margin
  5. Working Capital Ratio
- Commit your changes, and upload all your work to a feature branch of your choice.

## UI 

1. For creating UI (front-end) used bootstrap 5 as a framework for front-end by creating the components such as like Nav bar & cards.

## Getting the data from JSON file 

To get the data from JSon file used the fetch call in Javascript by async/await which convert the promise handling in to await , by using fetch which returns an array as a result . By using fetch API as a promise can lead us in to a callback hell. fetch API has one more issue when we want to retreive the data from the array we can use array methods such as forEach method but it is a synchronous , while fetch is asynchronous we can avoid this one using promise.all or array.reduce/map methods.By using Async , await before fetch provides the much use case.

## Using Array methods 

After getting the data from JSON file to perform the calculations for revenue,expenses , Gross profit margin, Net profit margin , assests , liabilties used functional programming concept and perform the map, filter , reduce to filter and access the data.

## For test cases 

For unit test cases Used the jest library to perform test cases on particular functions.

## version controlling

Used Git as a version control , by creating a branches like fetch_data, unittests by making the master as a stable branch creating a pull request from the userstories that I worked .


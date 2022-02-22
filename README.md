# Chatterstocks - Social Media Application

## Table of Contents:
* [General info](#general-info)
* [Demo](#demo)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)

* [Sources](#sources)

## General info
This is a social media application inspired by the website, [StockTwits](https://stocktwits.com/). 

Users of this application can search a company by its stock ticker to find its current stock price and information about the company. Users can also leave comments on each stock's page.

This application is still in development. Features to be added:
* Authentication to allow users to log in
* Autocomplete feature for search bar

## Demo
![Chatterstocks Application Demo](https://i.imgur.com/RCb7X3p.gif) 

## Technologies
This project was created with Javascript, HTML and CSS in addition to the following:
* Material UI - For styling
* Node.js - For server-side development.
* Express - For server-side development.
* MongoDB - For data storage.
* Mongoose - For database development.
* Npm - For dependency management.
* Stocks API from https://polygon.io/ - For retrieving real time stock information.

## Setup
Clone this repo to your desktop and run `npm install` to install the appropriate dependencies. 

## Usage
Run `npm run build` to run webpack the run `npm run start:client` to start the application. You will be able to access it at http://127.0.0.1:8080. 

To start the server, run the command `npm run start:client`.

This application relies on an external API. To obtain an API key for use in this application, follow these instructions: https://polygon.io/docs/stocks/getting-started. Once an API key is obtained, create a config.js file and import your API key into the helper.js file for use.



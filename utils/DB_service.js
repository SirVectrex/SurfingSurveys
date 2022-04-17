// DB Description

// Database includes table "umfragen" for all results

const axios = require("axios");
const dotenv = require("dotenv");
const { query } = require("express");

const express = require('express');
const res = require("express/lib/response");

const conString = process.env.DB_CON_STRING;
const pg = require("pg");

const dbConfig = {
    connectionString: conString,
    ssl: { rejectUnauthorized: false }
}

let dbClient = new pg.Client(dbConfig);
dbClient.connect();

dotenv.config();

/* Database function to save all poll entries */ 
/* Needs to be modified for your own usecase */
function insertPollRes(data){
    let query = "insert into umfragen(reason1, reason2, reason3, context) VALUES ($1,$2,$3,$4)";
    let readyData = [data.reason1, data.reason2, data.reason3, data.sector]
    dbClient.query(query, readyData, async function(err, result) {
        if(err) {
            console.log("Error launching data into Database")
        }//handle error
        else {
            // being very happy
        }
    })
}

/* Database function to get all poll entries (count) */
async function getAnswerCount(){
    let query = "select count(*) from umfragen"
    dbClient.query(query, async function(err, result) {
        if(err) {
            console.log("Error launching data into Database")
        }//handle error
        else {
            console.log("ergebnis" + result.rows[0].count)
            return result.rows[0].count
        }
    })
}

/* GET users listing. */
function submitData(query){
    dbClient.query(query, function (dbError, dbResponse){
        return true;
    })
}

/* additional function for fun. */
async function getData(my_query){
    let result = await dbClient.query(my_query)

    return result

}


module.exports = {
    getData: getData,
    submitData: submitData,
    submitPoll: insertPollRes,
    getAnswerCount: getAnswerCount,
}
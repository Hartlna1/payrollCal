/* 
Programmer: 	Nanette K. Hartley
Language: 		JavaScript
Filename:  		PayrolCal.js
Date: 			09/28/2013
Description: 	
*/

//declare and initalize all variables
var BR = "<br />";				//HTML line break
var ES = " ";					//extra space
var LE = ".";					//line end
var D = "$";					//dollar sign
var FED_RATE = 0.15;			//federal tax rate
var STATE_RATE = 0.034;			//state tax rate
var COUNTY_RATE = 0.011;		//county tax rate
var first_name = " ";			//employee first name
var last_name = " ";			//employee last name
var hours = 0.0;				//number of hours worked
var wage = 0.0;					//wage rate
var gross_pay = 0.0;			//calculated gross pay
var federal = 0.0;				//calculated federal tax
var state = 0.0;				//calculated state tax
var county = 0.0;				//calculated county tax
var total = 0.0;				//calculated total withholding
var net_pay = 0.0;				//calculated net pay

//Program Heading
document.write("Hello!  Welcome to the payroll calculator!" + BR + BR);

//requesting input
first_name = prompt("Please enter the employee's first name:", ES);
last_name = prompt("Please enter the employee's last name:", ES);
hours = prompt("Number of hours worked:", ES);
parseFloat(hours);
wage = prompt("Employee's hourly wage:", ES);
parseFloat(wage);

//processing of input 
gross_pay = hours * wage;
federal = gross_pay * FED_RATE;
state = gross_pay * STATE_RATE;
county = gross_pay * COUNTY_RATE;
total = state + federal + county;
net_pay = gross_pay - total;

//required output
document.write("Employee Name:" + ES + first_name + ES + last_name  + LE + BR);
document.write("Employee Wage:" + ES + D + wage + LE + BR);
document.write("Hours worked:" + ES + hours + LE + BR);
document.write("Gross Pay:" + ES + D + gross_pay + LE + BR);
document.write("Federal Tax:" + ES + D + federal  + LE + BR);
document.write("State Tax:" + ES + D + state + LE + BR);
document.write("County Tax:" + ES + D + county + LE + BR);
document.write("Total Withholding:" + ES + D + total + LE + BR);
document.write("Net Pay:" + ES + D + net_pay + LE + BR + BR);

//thank the user and end the program
document.write("Thanks for using the salary calculator!");
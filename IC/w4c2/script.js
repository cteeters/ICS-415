/**
 * Created by cteeters on 9/16/2015.
 */
var parts = document.URL.split("?"); // the right part of the URL
var params = parts[1].split("&"); // [param1=1, param2=2]
var username = params[0].split("=")[1];
var address = params[1].split("=")[1];
var phone = params[2].split("=")[1];

username = username.replace("+", " ");
address = address.replace("+", " ");
address = address.replace("+", " ");
phone = phone.replace("+", " ");

document.getElementById("username").innerHTML = username;
document.getElementById("address").innerHTML = address;
document.getElementById("phoneNumber").innerHTML = phone;
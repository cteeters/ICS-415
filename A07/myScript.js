/**
 * Created by cteeters on 9/20/2015.
 */
function getClasses(elem)
{
  var name = elem.className;
}

function addClass(elem, className)
{
  elem.className += " " + className;
}

function validateForm()
{
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var confirm = document.forms["myForm"]["confirm"].value;
  if(name == "")
  {
    document.getElementById("username").style.backgroundColor = "red";
    document.getElementById("alert").innerHTML = "You must enter a name."
    return false;
  }
  else if(email == "")
  {
    document.getElementById("email").style.backgroundColor = "red";
    document.getElementById("alert").innerHTML = "You must enter an email."
    return false;
  }
  else if(password == "")
  {
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("alert").innerHTML = "You must enter a password."
    return false;
  }
  else if(confirm == "")
  {
    document.getElementById("confirm").style.backgroundColor = "red";
    document.getElementById("alert").innerHTML = "You must confirm your password."
    return false;
  }
  else if(password != confirm)
  {
    document.getElementById("password").style.backgroundColor = "red";
    document.getElementById("confirm").style.backgroundColor = "red";
    document.getElementById("alert").innerHTML = "Your password did not match the confirmation."
    return false;
  }
}
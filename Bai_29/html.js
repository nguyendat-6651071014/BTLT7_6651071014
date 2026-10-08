function getFormvalue() {
    var form = document.getElementById("form1");
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
    return false; 
}

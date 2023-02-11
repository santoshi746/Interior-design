// sign in 
function sign(){
    var Name = document.getElementById("iii");
    var Number = document.getElementById("jjj");
    var EmailAddress= document.getElementById("kkk");
    var UserName= document.getElementById("lll");
    var Password = document.getElementById("mmm");

    if(Name.value.trim()=="" || Number.value.trim()=="" || EmailAddress.value.trim()==""|| UserName.value.trim()=="" || Password.value.trim()==""){
        alert("No empty values are allowed");
        return false;
    }
    else{
        alert("Successfully signed in");
        true;
    }
}
// login page
function log(){
    var LogName = document.getElementById("nnn");
    var LogPswd = document.getElementById("ooo");

    if(LogName.value.trim()=="" || LogPswd.value.trim()==""){
        alert("No empty values are allowed");
        return false;
    }
    else{
        alert("Successfully logged in");
        true;
    }
}
// Feedback 
var Green_color = document.querySelector("#feed_back1");
var Orange_color = document.querySelector("#feed_back2");
var Yellow_color = document.querySelector("#feed_back3");
var Pink_color = document.querySelector("#feed_back4");
var Red_color = document.querySelector("#feed_back5");
function back_1(){
 Green_color.style.backgroundColor = "green";

}
function back_2(){
    Orange_color.style.backgroundColor = "orange";
}
function back_3(){
    Yellow_color.style.backgroundColor = "yellow";
}
function back_4(){
    Pink_color.style.backgroundColor = "pink";
}
function back_5(){
    Red_color.style.backgroundColor = "red";
}

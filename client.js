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

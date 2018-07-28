function myFunction(){

   document.getElementById("chat").innerHTML += "<div class='chatbox'><p >"+ document.getElementById("msg").value +"</p></div>";
}

let msgList=["hello!","fine", "ok", "at 11"]
console.log(msgList)
var i=0
while (i < msgList.length) {
    console.log(msgList[i]) ;
    i++ ;
    }
    function selected() {
        ch='Attention supprimer tous';
        ch1='Vous êtes déja connecté';
        document.getElementById('identifier').innerHTML="  <form method='post'> <input id='text' type='text'/><br>     <input id='text' type='password'/>     <br>   <button id='reset' type='reset' onmouseover='alert(ch);'> Reset  </button>  <button id='submit' onclick='alert(ch1)'>Submit</button><br></form> ";
        return false;
}
function envoie(){
        alert('formuaire envoyé');

        return false;
}
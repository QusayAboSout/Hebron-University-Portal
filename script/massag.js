function mass1(){

    var inbox = document.getElementById('inbox');
    if(inbox){
        inbox.style.display = 'block';
    }

    var Sent = document.getElementById('Sent');
    if(Sent){
        Sent.style.display = 'none';
    }

    var addMasg = document.getElementById('addMasg');
    if(addMasg){
        addMasg.style.display = 'none';
    }
}
function mass2(){

    var inbox = document.getElementById('inbox');
    if(inbox){
        inbox.style.display = 'none';
    }

    var sent = document.getElementById('Sent');
    if(sent){
        sent.style.display = 'block';
    }
}
function addMasg(){

    var inbox = document.getElementById('inbox');
    if(inbox){
        inbox.style.display = 'none';
    }

    var sent = document.getElementById('Sent');
    if(sent){
        sent.style.display = 'none';
    }

    var addMasg = document.getElementById('addMasg');
    if(addMasg){
        addMasg.style.display = 'block';
    }
}
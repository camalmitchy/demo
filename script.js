function sayHello(){
    var name, msg;
    name = prompt('Enter your name');
    msg = 'Hello ' + name;
    console.log(msg);

    //html part
    var div,p;

    div = document.getElementById('welcome');
    p = document.createElement('p');

    //styling p
    p.style.fontSize = '40px';
    p.style.color = 'orange';

    p.innerHTML = msg;
    div.appendChild(p);
}
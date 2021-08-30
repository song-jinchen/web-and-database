/*
 * @Author: your name
 * @Date: 2021-07-25 15:54:04
 * @LastEditTime: 2021-08-01 15:53:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webmeishaonv\prac3\task3.js
 */
var i = 0;

function mouseOver(x) {
    i++;
    x.innerHTML = i;
}

function click_post(){
    var posts = document.getElementById("posts");
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var input = document.getElementById("input");
    div1.classList.add('post-time');
    div2.classList.add('post-content');
    posts.appendChild(div1);
    posts.appendChild(div2);
    div1.innerHTML = new Date();
    div2.innerHTML =input.value;

    var x = document.getElementsByName('color');
    // var colors = document.getElementsByName("color")
    // var styles = document.getElementsByName("style");
    console.log(x[0].checked);
    if (x[0].checked==true) { 
        div2.style.color='blue';     
    }
    if (x[1].checked==true) {  
        div2.style.color='red';     
    }

    var y = document.getElementsByName('style');
    console.log(y[0].checked);
    if (y[0].checked==true) {  
        div2.style.fontWeight='bold';     
    } 
    if (y[1].checked==true) { 
        div2.style.fontStyle='italic';     
    }
        
    
}

function goToMenu(){
    var main = document.getElementById('main');
    main.style.display='none';
    var menu = document.getElementById('menu');
    menu.style.display='block';

    menu.innerHTML= BackgroundColor()
}

function backToMain() {
    var main = document.getElementById('main');
    main.style.display='block';
    var menu = document.getElementById('menu');
    menu.style.display='none';

}
function changeBackground() {
    var menu = document.getElementsByName("backgroundColor");
    document.body.style.backgroundColor = menu[0].value;
    console.log(menu[0].value);
}


//Declare your function here
window.myFunc = function myFunc() {
    var div = document.createElement('div')
    div.innerHTML = 'Hello world!'
    div.style.backgroundColor = 'red'
    document.body.appendChild(div)
}
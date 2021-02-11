// KEYDOWN ALERT
let body = document.body;
body.addEventListener('keydown', event => {
    alert('You pressed the down key');
});

// MOUSEOVER H2 COLOR RED
let headers = document.getElementsByTagName('h2');
for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener('mouseover', event => {
        event.target.style.color = 'red';
    });
}

// CLICK IMG RESIZE
let allImgs = document.getElementsByTagName('img');
console.log(allImgs);
for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener('click', event => {
        let currentHeight = event.target.clientHeight;
        let currentWidth = event.target.clientWidth
        console.log(currentHeight, currentWidth);
        event.target.style.height = ((currentHeight - 10) + "px");
    })
}
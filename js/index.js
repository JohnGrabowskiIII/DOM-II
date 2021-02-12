// KEYDOWN ALERT
let body = document.body;
body.addEventListener('keydown', event => {
    alert('You pressed a key');
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
for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener('click', event => {
        let currentHeight = event.target.clientHeight;
        let currentWidth = event.target.clientWidth
        event.target.style.height = ((currentHeight - 10) + "px");
        event.stopPropagation();
    })
}

// CHANGE NAV COLOR ON SCROLL
function navHeadScrollEvent() {
    window.addEventListener('scroll', event => {
        document.querySelector('.main-navigation').style.backgroundColor = 'blue';
    })
}
navHeadScrollEvent();

// CONTENT GROW BORDER ON CLICK
let content = document.querySelectorAll('.content-section');
console.log(content);
// PUT A FOREACH IN HERE
content.forEach(contentSection => {
    contentSection.addEventListener('click', event => {
        switch (contentSection.style.border) {
            case 'thin solid red':
                contentSection.style.border = 'medium solid lime';
                console.log('medium')
                break;
            case 'medium solid lime':
                contentSection.style.border = 'thick solid black';
                console.log('thick')
                break;
            default:
                contentSection.style.border = 'thin solid red';
                console.log(contentSection.style.border)
                break;
        }
    })
})
    

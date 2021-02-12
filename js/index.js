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
content.forEach(contentSection => {
    contentSection.addEventListener('click', event => {
        switch (contentSection.style.border) {
            case 'thin solid red':
                contentSection.style.border = 'medium solid lime';
                break;
            case 'medium solid lime':
                contentSection.style.border = 'thick solid black';
                break;
            default:
                contentSection.style.border = 'thin solid red';
                break;
        }
    })
})

// CONTAINER <P> MOUSELEAVE TOGGLE
let destinationP = document.querySelectorAll('div.destination > p');
destinationP.forEach(tag => {
    tag.addEventListener('mouseleave', event => {
        tag.style.color = 'white';
    });
})

// DOUBLECLICK H1
let h1text = document.querySelector('h1');
h1text.addEventListener('dblclick', event => {
    h1text.textContent = 'Disappearing Bus';
});

// LOAD EVENT CHANGE BODY BACKGROUND COLOR
window.addEventListener('resize', event => {
    console.log('logging');
    body.style.backgroundColor = 'purple';
});

// DESTINATION <P> COPY
let yourDestP = document.querySelector('.content-destination > p');
yourDestP.addEventListener('copy', event => {
    alert('you copied the secret text... good job!');
})


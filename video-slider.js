let vid = document.querySelector('.video-slider video-slide');
let currentItem1 = 0;
let isEnabled1 = true;

function changeCurrentItem1(j){
currentItem1 = (j+vid.length) % vid.length;
}

function hideItem1(direction1){
    isEnabled1 = false;
    vid[currentItem1].classList.add(direction1);
    vid[currentItem1].addEventListener('animationend', function(){
        this.classList.remove('active1',direction1);
    })
}

function showItem1(direction1){
    vid[currentItem1].classList.add('next1',direction1)
    vid[currentItem1].addEventListener('animationend', function(){
        this.classList.remove('next1',direction1);
        this.classList.add('active1');
        isEnabled1 = true;
    })
}

function nextItem1(j){
    hideItem1('to-left1');
    changeCurrentItem1(j+1);
    showItem1('from-right1');
}

function previousItem1(j){
    hideItem1('to-right1');
    changeCurrentItem1(j-1);
    showItem1('from-left1');
}

document.querySelector('.video-arrow.left').addEventListener('click', function(){
    if (isEnabled1){
        previousItem1(currentItem1)
    }
})
document.querySelector('.video-arrow.right').addEventListener('click', function(){
    if (isEnabled1){
        nextItem1(previousItem1)
    }
})
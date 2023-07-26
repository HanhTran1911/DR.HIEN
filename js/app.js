// click vào sider
document.addEventListener('DOMContentLoaded' ,function () {
    const iconLeft=document.querySelector('#iconLeft');
    const iconRight=document.querySelector('#iconRight');
    const slide1 = document.querySelector('#slide1');
    const slide2 = document.querySelector('#slide2');

    iconLeft.addEventListener('click' , function (event) {
        if(slide1.style.display='flex'){
            slide1.style.display='none';
            slide2.style.display='flex';
        
        }
        else {
            slide2.style.display='none';
            slide1.style.display='flex'
        }
    });
    iconRight.addEventListener('click' , function (event) {
        if(slide2.style.display='flex'){
            slide1.style.display='flex';
            slide2.style.display='none';
        }
        else {
            slide2.style.display='flex';
            slide1.style.display='none'
        }
    });
});


// click vào tin tức

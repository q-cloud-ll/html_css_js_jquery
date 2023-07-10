//4100121070406
var slider = document.querySelector('.m-slider');
var rightnav_bar = document.querySelectorAll('.rightnav-bar-li');
var mainSlider = document.querySelector('.m-slider');
var rightNavBar = document.querySelector('.rightnav-bar');

window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    //鼠标向下滚轮一点 大图片切换下图片,具体动画实现css
    var bigPicture = document.querySelector('.head-banner');
    var smallImg = document.querySelector('.topact-small-img');
    if (top > 10) {
        bigPicture.className = 'head-banner';
        smallImg.style.opacity = 1;
        bigPicture.style.height = 360 + 'px';
    }
    //页面滚动时可以得到滚动的距离可以根据这个数值来决定何时给div绑定动画
    switch (true) {
        case top > 410 && top < 1300:
            rightnav_bar[0].className = "rightnav-bar-li selected rn-rmhd";
            rightnav_bar[1].className = "rightnav-bar-li rn-spzx";
            rightnav_bar[2].className = "rightnav-bar-li rn-sszx";
            rightnav_bar[3].className = "rightnav-bar-li rn-yxzl";
            rightnav_bar[4].className = "rightnav-bar-li rn-fanart";
            break;
        case top > 1300 && top < 1942:
            rightnav_bar[0].className = "rightnav-bar-li rn-rmhd";
            rightnav_bar[1].className = "rightnav-bar-li selected rn-spzx";
            rightnav_bar[2].className = "rightnav-bar-li rn-sszx";
            rightnav_bar[3].className = "rightnav-bar-li rn-yxzl";
            rightnav_bar[4].className = "rightnav-bar-li rn-fanart";
            break;
        case top > 1942 && top < 2540:
            rightnav_bar[0].className = "rightnav-bar-li rn-rmhd";
            rightnav_bar[1].className = "rightnav-bar-li rn-spzx";
            rightnav_bar[2].className = "rightnav-bar-li selected rn-sszx";
            rightnav_bar[3].className = "rightnav-bar-li rn-yxzl";
            rightnav_bar[4].className = "rightnav-bar-li rn-fanart";
            break;
        case top > 2540 && top < 3164:
            rightnav_bar[0].className = "rightnav-bar-li rn-rmhd";
            rightnav_bar[1].className = "rightnav-bar-li rn-spzx";
            rightnav_bar[2].className = "rightnav-bar-li rn-sszx";
            rightnav_bar[3].className = "rightnav-bar-li selected rn-yxzl";
            rightnav_bar[4].className = "rightnav-bar-li rn-fanart";
            break;
        case top > 3164 && top < 3264:
            rightnav_bar[0].className = "rightnav-bar-li rn-rmhd";
            rightnav_bar[1].className = "rightnav-bar-li rn-spzx";
            rightnav_bar[2].className = "rightnav-bar-li rn-sszx";
            rightnav_bar[3].className = "rightnav-bar-li rn-yxzl";
            rightnav_bar[4].className = "rightnav-bar-li selected rn-fanart";
            break;
        case top < 100:
            rightnav_bar[0].className = "rightnav-bar-li rn-rmhd";
            rightnav_bar[1].className = "rightnav-bar-li rn-spzx";
            rightnav_bar[2].className = "rightnav-bar-li rn-sszx";
            rightnav_bar[3].className = "rightnav-bar-li rn-yxzl";
            rightnav_bar[4].className = "rightnav-bar-li rn-fanart";
            break;
        default:
            break;
    }
    for (let i = 0; i < rightnav_bar.length - 1; i++) {
        rightnav_bar[i].addEventListener('click', function () {  
            console.log(213);
        });
    }
    
    //到某一位置出现polo  300
    if (top >= 300){
        rightNavBar.className = 'rightnav-bar show showTop';
    }
    else{
        rightNavBar.className = 'rightnav-bar show'
    }
}

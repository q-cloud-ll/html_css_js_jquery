window.onload = function () {  
    //排他思想
   var selected = document.querySelector('.g-wrap-match .part-tab-title').querySelectorAll('li');//赛事中心
    var selected_act = document.querySelector('.m-act .part-tab-title').querySelectorAll('li');//热门活动

    for(let i = 0; i < selected.length;i++){
        selected[i].onmousemove= function () {  
            for(let i = 0; i < selected.length;i++){
                selected[i].className = '';
            }
            this.className = 'selected';
        }
        selected_act[i].onmousemove = function () {  
            for(let i = 0;i < selected_act.length;i++){
                selected_act[i].className = '';
            }
            this.className = 'selected'; 
        }
    }


    var arr = [
        '../w-images/a-',
        '../w-images/b-',
        '../w-images/c-',
        '../w-images/b-',
        '../w-images/a-',
        '../w-images/b-',
        '../w-images/c-',
        '../w-images/a-'
    ];
    var array = [
        'https://shp.qpic.cn/cfwebcap/0/11d2683a6f00865a119f5ca50c6afce9/0?width=273&height=375',
        'https://shp.qpic.cn/cfwebcap/0/305af37f4c3cc2a17720c70e457bec40/0?width=273&height=375',
        'https://shp.qpic.cn/cfwebcap/0/9ccaebfa4d24ec6305eec060ebedfdd6/0?width=273&height=375',
        'https://shp.qpic.cn/cfwebcap/0/f1af1518b590f1aa9014466a2d235ae8/0?width=273&height=375',
        'https://shp.qpic.cn/cfwebcap/0/3931729501b14e4ac7b0f8d909bc4b32/0?width=273&height=375'
    ];
    var array1 = [
        'https://shp.qpic.cn/cfwebcap/0/c1343ca9104362bfba1aca3077249d00/0?width=273&height=375 ',
        'https://shp.qpic.cn/cfwebcap/0/bb258695f6a6d3f77229a70cf9206a9d/0?width=273&height=375',
        'https://shp.qpic.cn/cfwebcap/0/485b178eca45f5d27811bc770d0c0e75/0?width=273&height=375',
        'https://shp.qpic.cn/cfwebcap/0/0d4c367ab33cce1968b1c5e484bed320/0?width=273&height=375',
        'https://shp.qpic.cn/cfwebcap/0/11d2683a6f00865a119f5ca50c6afce9/0?width=273&height=375'
    ];
        //视频图片切换模块 start
        var mask_img = document.querySelectorAll(".mask-img");
        var video_item = document.querySelectorAll(".video-pre-wrap");
        var video_img = document.querySelectorAll(".video-pre-img");
        var video_i = document.querySelectorAll(".video-pre-bar>i");
        
        for (let i = 0; i < mask_img.length; i++) {
            mask_img[i].addEventListener('mousemove',function (e) {  
                var moveX = e.clientX -offset(mask_img[i], "left");
                video_item[i].style.display = "block";
                video_i[i].style.width = moveX + 'px';           
            for (let j = 1; j <= video_img.length; j++) {
                if (moveX < (193 / 8) * j) {
                        video_img[i].src = arr[i] + j + ".png";
                    break;
                    } 
                }
            });        
            mask_img[i].addEventListener('mouseout',function (e) {  
                video_item[i].style.display = "none";
            });
        }

        function offset(obj, direction){//封装函数
            //将top,left首字母大写,并拼接成offsetTop,offsetLeft
            var offsetDir = 'offset'+ direction[0].toUpperCase()+direction.substring(1);//substring截取字符串(a,b)a是开始的索引值 b是结束的索引值
            var realNum = obj[offsetDir];
            var positionParent = obj.offsetParent;  //获取上一级定位元素对象
            
            while(positionParent != null){
            realNum += positionParent[offsetDir];
            positionParent = positionParent.offsetParent;
            }
            return realNum;
        }
        //视频图片切换模块  end



        //热门专辑模块的小自动轮播图 start
        var swiper = document.querySelector('.swiper');//ul
        var hotProgram = document.querySelectorAll('.hotprogram-item');//li
        var length = 0;
        var pictureTimer;

        function autoFun() {  
            length -= 498;
            if (Math.abs(length) >= 171 * hotProgram.length) {
                length = 0;
            }
            if (swiper.style.left == 0 + "px") {
                length = -498;
            }
            swiper.style.left = length + "px";
        }

        //自动轮播
        pictureTimer = setInterval(autoFun, 3000); //2s切换一次
        for (let i = 0; i < hotProgram.length; i++) {
            hotProgram[i].onmouseover = () => {
            clearInterval(pictureTimer); // 触碰到清楚定时器
            };
            hotProgram[i].onmouseout = () => {
            pictureTimer = setInterval(autoFun, 3000);
            };
        }

        // 周一到周末的selected
        var date = document.querySelectorAll('.m-hotprogram .part-tab-title li');
        var imgList = document.querySelectorAll('.program-pic');
        for (let i = 0; i <date.length; i++) {
            date[i].addEventListener('mousemove',function () {  
                for (let i = 0; i <date.length; i++) {
                    date[i].className = '';
                }
                this.className = 'selected';
                for (let j = 0; j < array.length; j++) {
                    if (date[1].className == 'selected') {
                        imgList[j].src = array[j];
                        swiper.style.left = 0 + "px"; //切换时从头开始
                    }
                    else if(date[0].className == 'selected'){
                        imgList[j].src = array1[j];
                        swiper.style.left = 0 + "px"; //切换时从头开始
                    }
                }
            });

            
        }
        //热门专辑模块的小自动轮播图  end

        //视频拉下效果 与css搭配 start
        var newSkin = document.querySelector('.m-new-skin');
        var moreNewSkin = document.querySelector('.more-new-skin');
        var skinHover = document.querySelector('.skin-hover')
        newSkin.addEventListener('mousemove',function () {  
            moreNewSkin.className = 'more-new-skin show';
            skinHover.style.display = 'block'
            skinHover.addEventListener('mousemove', function () {  
                moreNewSkin.className = 'more-new-skin show';
            });
        });
        newSkin.addEventListener('mouseout',function () {  
            moreNewSkin.className = 'more-new-skin';
            skinHover.style.display = 'none'
        });
        moreNewSkin.addEventListener('mousemove', function () {  
            this.className = 'more-new-skin show';
            skinHover.style.display = 'block'
        });
        moreNewSkin.addEventListener('mouseout', function () {  
            this.className = 'more-new-skin';
            skinHover.style.display = 'none'
        });
         //视频拉下效果 与css搭配 end

        /* 手风琴 start */
        var accordionItems = document.querySelectorAll('.accordion-items');
        for (let i = 0; i < accordionItems.length; i++) {
            accordionItems[i].addEventListener('mousemove',function () {  
                this.style.width = '200%';
            });

            accordionItems[i].addEventListener('mouseout',function () { 
                this.style.width = '12.5%';
            });
            
        }
}



$(function () {  
    $(".rightnav-bar-li:last").click(function (e) { 
        $("body,html").stop().animate({
            scrollTop: 0
        },350)
    });
    $(".rightnav-bar-li").click(function () { 
        var current = $(".bar").eq($(this).index()).offset().top;
        console.log(current);
        $("body,html").stop().animate({  
            scrollTop : current
        });
    });
})

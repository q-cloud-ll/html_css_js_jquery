//轮播图
window.addEventListener('load',function () { 
    //动画函数  obj是目标对象  target是目标位置
    function animate(obj,target,callback) {
        //当不断点击按钮 元素得速度会越来越快 开了太多的定时器
        //只有一个定时器执行
        clearInterval(obj.timer);
        //obj.timer是一个属性
        obj.timer = setInterval(() =>{
            var step = (target -obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);// Math.ceil对数进行上舍入, Math.floor下舍入
            if(obj.offsetLeft == target){
                //停止动画 本质是定时器
                clearInterval(obj.timer);
                callback && callback();
            }
        //改变一得值
            obj.style.left = obj.offsetLeft + step +'px';
        }, 15);
    }
    //鼠标触碰下面的title  触碰到谁谁亮  相当于hover 
    var sliderTitle = document.querySelectorAll('.slider-title-list .title');
    var ul = document.querySelector('#slider-ul');
    var li = ul.querySelectorAll('.slider-item');
    var imgWidth = li[0].offsetWidth;
    for (let i = 0; i < ul.children.length ; i++) {
        li[i].setAttribute('data-index',i);
        sliderTitle[i].addEventListener('mouseover',function () {  
        for (let j = 0; j < ul.children.length - 1 ; j++) {
                sliderTitle[j].className = 'title';
            }
            this.className = 'title selected';
            //触碰下面的标题移动图片 移动的是ul
            var index = li[i].getAttribute('data-index');
            //当点击li,就把这个li的索引号给index
            num = index;
            circle = index;
            animate(ul,-index*imgWidth);
        });
    }

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //左右按钮点击事件
    var sliderLeft = document.querySelector('.slider-left');
    var sliderRight = document.querySelector('.slider-right');
    var num = 0;
    var circle = 0;
    var flag = true;//节流阀


    function titleChange() {  
        for (let i = 0; i < ul.children.length - 1; i++) {
            sliderTitle[i].className = 'title';
        }
        sliderTitle[circle].className = 'title selected'
    }


    sliderRight.addEventListener('click',function () {  //ul.children.length = 6
        if(flag){
            flag = false;
            if(num == ul.children.length - 1){
                ul.style.left =0;
                num = 0;
            }
            num++;
            animate(ul,-num*imgWidth,function () { flag = true });
            circle++;
            if(circle == ul.children.length - 1){
                circle = 0;
            }
            titleChange()
        }
    });

    //left4  820
    sliderLeft.addEventListener('click',function () {  
        if(flag){
            if(num == 0){
                num = ul.children.length -1;
                ul.style.left =-num * imgWidth+ 'px';
            }
            num--;
            animate(ul,-num*imgWidth,function () { flag = true; });
            circle--;
    
            if(circle < 0){
                circle = ul.children.length - 2;
            }
            titleChange()
        }
    });
    
    //自动播放
    setInterval(() =>{  
        sliderRight.click();//手动调用点击事件
    },2500);
})
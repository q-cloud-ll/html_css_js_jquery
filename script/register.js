window.onload = function () {
    /* 昵称部分 start */
    var nickName = document.querySelector('#nickname');
    var errEmpty = document.querySelector('.err-empty.onfous');
    var errTips = document.querySelector('.err-tips');
    var nicknameOK = document.querySelector('#nickname-ok');
    nickName.addEventListener('focus', function () {  //昵称框input获得焦点
        nickName.style.borderColor = green;
        errEmpty.style.height = 0;
        errTips.style.display = 'none';
    });
    nickName.addEventListener('blur', function () {  //昵称框input失去焦点
        if (nickName.value == '' || nickName.value == null || checkPassword(nickName.value)) {
            nickName.style.borderColor = red;
            errEmpty.style.height = 18 + 'px';
            errTips.style.display = 'block';
            nicknameOK.style.display = 'none';
        }
        else{
            nicknameOK.style.display = 'block';
        }
    });
    /* 昵称部分 end */

    /* 密码部分 start  正则表达式 */
    var passWord = document.querySelector('#password');//input标签
    var passWordErr = document.querySelector('.password-err.tips');
    var errP = document.querySelector('.err-tips.tips');
    var passwordGreen = document.querySelector('.password-space.space');//背景是green
    var passwordInfo = document.querySelectorAll('.password-space');//背景是info
    var errorTips = document.querySelector('.error-tips');// 改变里面的html值  密码不能为空 => 长度为8-16位字符
    //刚开始不是空格后面是空格
    var space = /(^\s+)|(\s+$)|\s+/g;
    //*号是可以重复0次或者很多次           +相当于出现1次或者很多次   ?相当于1||0
    //，?= 匹配结果中不包含它所匹配的字符，但是待匹配字符串必须符合它所对应的规则   .{8,16}所有的8-16位字符
    //(?=.*[a-z])这表示一个环视的语法，表示当前位置的后面没有换行且匹配一个字母（从a到z中的一个）
    var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    var reg = /^[0-9]{8}$/;
    var green = '#549df8';
    var red = '#ff5b5b';
    var eye = document.querySelector('.eye.close');//获取小眼睛
    passWord.addEventListener('focus', function () {  //密码框input获得焦点
        if ('oninput' in passWord) {
            passWord.addEventListener('input', getWord, false);//实时监听密码框里面的value值
        }
        else {
            passWord.onpropertychange = getWord;
        }
        passWord.style.borderColor = green;
        passWordErr.style.height = 78 + 'px';
        errP.style.display = 'none';
        errP.style.height = 0;
        function getWord() {
            //检查空格的存在
            if (checkPassword(passWord.value) || space.test(passWord.value)) {
                passWord.style.borderColor = red;
                passwordGreen.style.background = 'url(../image5/error@2x.png) no-repeat';
                passwordGreen.style.backgroundSize = '18px';
                passwordGreen.style.color = red;
                errorTips.innerHTML = '密码不能为空';
            }
            else {
                passWord.style.borderColor = green;
                passwordGreen.style.background = 'url(../image5/green@2x.png) no-repeat';
                passwordGreen.style.backgroundSize = '18px';
                passwordGreen.style.color = green;
            }
            //检查密码是否是8-16位字符
            if (checkPasswordNumber(passWord.value)) {
                passwordInfo[1].style.background = 'url(../image5/green@2x.png) no-repeat';
                passwordInfo[1].style.backgroundSize = '18px';
            }
            else {
                passwordInfo[1].style.background = 'url(../image5/info@2x.png) no-repeat';
                passwordInfo[1].style.backgroundSize = '18px';
            }
            //检查密码必须包含大小写字母和数字的组合，能使用特殊字符
            if (checkPasswordRequest(passWord.value)) {
                passwordInfo[2].style.background = 'url(../image5/green@2x.png) no-repeat';
                passwordInfo[2].style.backgroundSize = '18px';
            }
            else {
                passwordInfo[2].style.background = 'url(../image5/info@2x.png) no-repeat';
                passwordInfo[2].style.backgroundSize = '18px';
            }
            if (passWord.value != 0) {
                console.log(132);
                eye.style.display = 'block';
                eye.addEventListener('mousedown', function () {  
                    eye.className = 'eye'
                    passWord.type = 'text';
                });
                eye.addEventListener('mouseup', function () {  
                    eye.className = 'eye close'
                    passWord.type = 'password';
                });
            }
            else if(passWord.value == 0)
                eye.style.display = 'block';
        }
    });
    var passwordOk = document.querySelector('#password-ok');
    passWord.addEventListener('blur', function () {  //密码input失去焦点////////////////
        // 判断密码字符串为空时
        if (passWord.value == '' || passWord.value == null) {
            passWord.style.borderColor = red;
            errP.style.display = 'block';
            errP.style.height = 18 + 'px';
            passWordErr.style.height = 0;
        }
        //判断密码长度小于8位时
        if (checkPasswordLessEight(passWord.value) && !checkPassword(passWord.value)) {
            errorTips.innerHTML = '长度为8-16位字符';
            errP.style.display = 'block';
            errP.style.height = 18 + 'px';
            passWordErr.style.height = 0;
            passWord.style.borderColor = red;
        }
        //判断密码长度8-16位并且加入密码没有包含大小写字母和数字的组合，能使用特殊字符
        if (!checkPassword(passWord.value) && checkPasswordNumber(passWord.value) && checkPasswordNotRequest(passWord.value) ) {
            errorTips.innerHTML = '必须包含大小写字母和数字的组合，能使用特殊字符';
            errP.style.display = 'block';
            errP.style.height = 18 + 'px';
            passWordErr.style.height = 0;
            passWord.style.borderColor = red;
            console.log(132);
        }
        
        //判断整个密码如果正确显示isok
        if (!checkPassword(passWord.value) && checkPasswordNumber(passWord.value) && checkPasswordRequest(passWord.value)) {
            passwordOk.style.display = 'block';
            passWord.style.borderColor = '#aaa';
            passWordErr.style.height = 0;
        }
        else {
            passwordOk.style.display = 'none';
        }
    });
    //检查密码是否有空格
    function checkPassword(str) {
        if (!space.test(str))
            return false;
        return true;
    }
    //检查密码的8-16位
    function checkPasswordNumber(str) {
        if (!(str.length >= 8 && str.length <= 16))
            return false;
        return true;
    }
    //检查密码包含大小写字母和数字的组合，能使用特殊字符
    function checkPasswordRequest(str) {
        //匹配成功regPassword.test(str)为true
        if (!regPassword.test(str))
            return false;
        return true;
    }
    //检查密码如果不包含大小写字母和数字的组合，能使用特殊字符(如果不符合这个规定)
    function checkPasswordNotRequest(str) {
        //匹配成功regPassword.test(str)为true
        if (!regPassword.test(str))
            return true;
        return false;
    }
    //检查密码是否小于8位
    function checkPasswordLessEight(str) {
        if (!(str.length < 8 && str.length > 0))
            return false;
        return true;
    }
    /* 密码部分 end */

    /* 地区部分 start */
    var nation = document.querySelector('#nation');//nation  input
    var selectorImg = document.querySelectorAll('.selector>img');//down up  img
    var wrapperCountry = document.querySelector('.wrapper-country');//ul
    var wrapperLi = document.querySelectorAll('.wrapper-country>li');
    var nationContent = document.querySelector('.input-placeholder');
    var nationSpan = document.querySelectorAll('.nation-span');

    nation.addEventListener('focus', function () {
        nation.style.borderColor = green;
        selectorImg[0].style.display = 'none';
        selectorImg[1].style.display = 'block';
        wrapperCountry.style.display = 'block';
    });
    //给每个li标签注册点击监听 点击改变span里面的值
    for (let i = 0; i < wrapperLi.length; i++) {
        wrapperLi[i].addEventListener('click', function () {
            nationContent.innerHTML = nationSpan[i].innerHTML;
        });
    }
    nation.addEventListener('blur', function () {
        //在click和blur中 失去焦点的速度比点击快,所以要加定时器
        setTimeout(function () {
            nation.style.borderColor = '#aaa';
            selectorImg[1].style.display = 'none';
            selectorImg[0].style.display = 'block';
            wrapperCountry.style.display = 'none';
        }, 100)
    });

    /* 地区部分 end */


    /* 手机号码部分 start */
    var phone = document.querySelector('#phone');
    var phoneNumber = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
    var message = document.querySelector('.message');
    var inputOk = document.querySelector('.input-ok');
    var numberErr = document.querySelector('.err-num');
    var n = document.querySelector('.number-err.errors');
    var p = document.querySelector('.p');
    var sendMessage = document.querySelector('.send-message');
    phone.addEventListener('focus', function () {
        if ('oninput' in phone) {
            phone.addEventListener('input', getWord, false);
        }
        else {
            phone.onpropertychange = getWord;
        }
        phone.style.borderColor = green;
        message.style.display = 'block';
        function getWord() {
            if (phone.value == '' || phone.value == null) {//如果手机号码的value的值变为null
                inputOk.style.display = 'none'//对勾消失
                p.style.display = 'block';//可通过手机号找回密码显示
                numberErr.style.display = 'none';//手机号码格式不对 变为none
                n.style.height = 0;//手机号码格式高度变为0
            }
        }
    });
    phone.addEventListener('blur', function () {
        phone.style.borderColor = '#aaa';
        message.style.display = 'none';
        if (checkPhoneNumber(phone.value)) {//如果手机正则表达式检测通过
            inputOk.style.display = 'block';//对勾显示
            p.style.display = 'block';//可通过手机号找回密码显示
            message.style.display = 'block';//手机验证码栏变为block
            numberErr.style.display = 'none';//手机号码格式不对 变为none
            n.style.height = 0;//手机号码格式高度变为0
            sendMessage.className = 'send-message';//发送手机验证码变蓝色
        }
        if (phone.value.length > 0 && phone.value.length < 11) {//如果输入的数字在1-10之间
            inputOk.style.display = 'none';//对勾标志消失
            phone.style.borderColor = red;//边框颜色边成红色
            numberErr.style.display = 'block';//手机号码格式不对 变为block
            n.style.height = 18 + 'px';//手机号码格式高度变为18
            p.style.display = 'none';//可通过手机号找回密码消失
            message.style.display = 'block';//手机验证码栏变为block
            sendMessage.className = 'send-message disabled';//发送手机验证码变灰色
        }
    });
    //根据返回值判断匹配正则手机号码是否匹配
    function checkPhoneNumber(str) {
        if (!phoneNumber.test(str))
            return false;
        return true;
    }
    /* 手机号码部分 end */

    

    /* 渐变轮播图 start */
    var arrImg = ['../image5/slider1.jpg','../image5/slider2.jpg','../image5/silder3.jpg']; 
    var sliderLeft = document.querySelector('.slider-left');
    var ul = document.createElement('ul');
    let ol = document.createElement('ol');
    ul.className = 'slider'
    sliderLeft.appendChild(ul);
    sliderLeft.appendChild(ol)
    
    for (let i = 0; i < arrImg.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
    }
    let ul_li = ul.childNodes;
    let ol_li = ol.childNodes;
    for (let index = 0; index < arrImg.length; index++) {
        ul_li[index].className = 'slider-item slider-item'+(index+1);
    }
    for (let i = 0; i < arrImg.length; i++) {
        let li = document.createElement('li');
        li.innerText = i + 1;
        li.setAttribute('index',i);
        ol.appendChild(li);
        
    }
    for(let i = 0; i < ol_li.length; i++){
        ol_li[i].onclick = function () {
            for(let j = 0; j < ol_li.length; j++){
                ul_li[j].style.opacity = 0;
            }
            let li_index = parseInt(this.getAttribute('index'));
            index = li_index;
            ul_li[i].style.opacity = 1;
        }
    }
    let index = 0;
    ul_li[0].onclick = function () {
        index ++;
        if(index == 3) index = 0;
        ol_li[index].click();
    }
    setInterval(function(){
        ul_li[0].click()
    },3000)
    /* 渐变轮播图 end */


    /* 注册阶段 start */
    var submit = document.querySelector('#submit');

    submit.addEventListener('click', function () {  
        if (nickName.value == '' || nickName.value == null) {
            alert("请输入昵称");
        }
        if (passWord.value == '' || passWord.value == null){
            alert("请输入密码");
        }
        console.log(passwordOk.style.display == 'block');
        if ((nickName.value != null && nickName.value != null) &&  passwordOk.style.display == 'block') {
            window.location.href='/html/LOL.html';
            // console.log("123");
        }
        else if(checkPassword(passWord.value) || checkPasswordLessEight(passWord.value)
        || checkPasswordNumber(passWord.value) || checkPasswordRequest(passWord.value)){
            alert('您输入的密码有问题');
        }
        if (phone.value == '' || phone.value == null ) {
            alert('请输入手机号码');
        }
        
    });
    /* 注册阶段 end */
    

}
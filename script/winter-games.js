/**
 * 倒计时
 */
var days = document.querySelector("#day")
var hours = document.querySelector("#hour")
var mins = document.querySelector("#min")
var secs = document.querySelector("#sec")
getCountDown("2022/2/4 20:00:00");

function getCountDown(time) {
    setInterval(function () {
        var nowTime = +new Date();
        var endTime = +new Date(time);
        var cd = (endTime - nowTime) / 1000;
        var day = parseInt(cd / 60 / 60 / 24); //天
        day = day >= 10 ? day : "0" + day;
        var hour = parseInt(cd / 60 / 60 % 24); //小时
        hour = hour >= 10 ? hour : "0" + hour;
        var min = parseInt(cd / 60 % 60); //分
        min = min >= 10 ? min : "0" + min;
        var sec = parseInt(cd % 60); //秒
        sec = sec >= 10 ? sec : "0" + sec;
        days.innerHTML = day;
        hours.innerHTML = hour;
        mins.innerHTML = min;
        secs.innerHTML = sec;

    }, 1000)
}

/**
 * 场馆巡礼模块, 数组存储, 切换标题图片内容。
 */
let bj_arr = [{
        title: '国家游泳中心',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/137/223/2325/151240127.jpg',
        detail: '“双奥场馆”国家游泳中心在2019年首次通过“水冰转换”制出4条冬奥标准的冰壶赛道。“水冰转换”让国家游泳中心可以在“水上功能”和“冰上功能“之间自由切换，可以同时具备开展水上运动、冰上运动，及各类大型活动的能力。场馆泳池正常向公众开放。',
    },
    {
        title: '国家体育场',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/91/223/2325/151240081.jpg',
        detail: '国家体育场位于北京奥林匹克公园中心区南部，为2008年北京奥运会的主体育场，占地20.4公顷，建筑面积25.8万平方米，可容纳观众9.1万人。根据规划，国家体育场成为北京冬奥会开、闭幕式的场馆。'
    },
    {
        title: '五棵松体育中心',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/92/223/2325/151240082.jpg',
        detail: '五棵松体育中心可在6小时内实现冰球、篮球两种比赛模式的转换，是国内首个在一块比赛场地同时举办篮球、冰球两种职业体育赛事的场馆。按超低能耗建筑标准设计建造的五棵松冰上运动中心在北京冬奥会期间将作为冰球训练馆使用，其特殊设计的多彩外幕墙体系，让场馆得名“冰菱花”。'
    },
    {
        title: '首都体育馆',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/139/223/2325/151240129.jpg',
        detail: '1968年建成，国内第一座人工室内冰场，曾举办2008年北京奥运会排球比赛。2022年北京冬奥会期间将承担短道速滑和花样滑冰比赛任务，产生14枚金牌。这是北京冬奥会第一项完工的改扩建竞赛场馆工程：外观“修旧如旧”，延续经典；场馆内着力打造“最美的冰”，营造更好观赛体验。'
    },
    {
        title: '国家速滑馆',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/93/223/2325/151240083.jpg',
        detail: '国家速滑馆又称“冰丝带”，是本届赛事唯一新建冰上竞赛场馆，与“鸟巢”、“水立方”共同组成“双奥”之城的标志性建筑群。“冰丝带”是冬奥历史上第一个使用二氧化碳作为制冷剂的速滑场馆，将承担速度滑冰项目的比赛，产生14块金牌，是冬奥会产生金牌数量最多的单个场馆。'
    },
    {
        title: '首钢滑雪大跳台',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/94/223/2325/151240084.jpg',
        detail: '首钢滑雪大跳台将在北京冬奥会期间承担单板和自由式滑雪大跳台比赛项目，设计理念源自中国敦煌壁画中传统的飞天造型，从侧面看去又犹如一只灵动的“水晶鞋”。赛道结束区未来还可举办演唱会、发布会等大型户外活动。'
    },
    {
        title: '国家体育馆',
        img: '//img1.gtimg.com/ninja/2/2020/12/ninja160889089166979.jpg',
        detail: '国家体育馆作为北京2008年奥运会及残奥会的竞赛场馆之一，曾经举办体操、蹦床等项目。改造后将举办北京2022年冬奥会男子冰球和女子冰球部分比赛、冬残奥会残疾人冰球比赛。场馆赛后除开展冰球运动外，还可以开展花样滑冰、短道速滑等项目，还具有开展夏季运动的多功能转换能力。'
    },
    {
        title: '国家高山滑雪中心',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/95/223/2325/151240085.jpg',
        detail: '高山滑雪被誉为“冬奥会皇冠上的明珠”。国家高山滑雪中心设7条雪道，雪道坡度大、落差大，建设难度极高，主要承担高山滑雪赛事。同时国家高山滑雪中心还包括山顶出发区、中间平台、竞技结束区、集散广场、索道等配套设施，最多同时容纳8000人观赛。 '
    },
    {
        title: '国家雪车雪橇中心',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/96/223/2325/151240086.jpg',
        detail: '国家雪车雪橇中心是北京冬奥会雪车、雪橇、钢架雪车项目比赛场地。场馆共有16个角度、坡度不同的弯道，2020年10月赛道制冰完成后，迎来国家队入驻训练，成为北京冬奥会首个国家队入驻训练的竞赛场馆。'
    },
    {
        title: '云顶滑雪公园',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/97/223/2325/151240087.jpg',
        detail: '云顶滑雪公园包括U型场地技巧、坡面障碍技巧、雪上技巧、空中技巧、障碍追逐、平行大回转六条赛道，共计产生20块金牌。张家口山地媒体中心位于场馆群内，由云顶大酒店改建而成。云顶滑雪公园不仅是自由式滑雪及单板滑雪国家队的训练基地，也为大众冰雪运动提供了优质场地。'
    },
    {
        title: '国家冬季两项中心',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/146/223/2325/151240136.jpg',
        detail: '国家冬季两项中心位于张家口市崇礼区太子城区域东北侧山谷，依次布置靶场、赛道与起终点区、场馆技术楼等。国家冬季两项中心将承担北京冬奥会冬季两项以及冬残奥会冬季两项的比赛。'
    },
    {
        title: '国家跳台滑雪中心',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/99/223/2325/151240089.jpg',
        detail: '国家跳台滑雪中心将承担北京冬奥会跳台滑雪、北欧两项的比赛。国家跳台滑雪中心是我国首座符合国际标准的跳台滑雪场地，也是张家口赛区冬奥会场馆群建设中工程量最大、技术难度最高的竞赛场馆。跳台剖面因与中国传统吉祥饰物“如意”的S形曲线契合，因此被形象地称为“雪如意”。'
    },
    {
        title: '国家越野滑雪中心',
        img: 'https://img1.gtimg.com/bj2022/pics/hv1/100/223/2325/151240090.jpg',
        detail: '国家越野滑雪中心将承担北京冬奥会越野滑雪和北欧两项的比赛。越野滑雪是冬季项目中的马拉松，赛道路线长、运动员比赛时间长，是典型的耐力项目。'
    }
]
$(".venue-icon").click((function () {
    let t = $(this).data("index")
    $(".venue-icon").removeClass("show"),
        $(this).addClass("show")
    console.log(t);

    $(".desc-list .item img").attr("src", bj_arr[t - 1].img)
    $(".name p").html(bj_arr[t - 1].title)
    $(".item .detail").html(bj_arr[t - 1].detail)
}));

/**
 * 行走的冰墩墩
 */

// 整个页面监听鼠标是否移动  然后对四个小妖怪的出现进行判断
let monster = document.querySelector(".monsters");
(function () {
    tim = null;
    window.onmousemove = function () {
        isMove = true;
        clearTimeout(tim);
        monster.style.opacity = 0; // 移动时
        tim = setTimeout(function () {
            isMove = false;
            monster.style.opacity = 1; // 静止后
        }, 700);
    }
}());

/**
 * 拖拽
 */

var city_second = document.querySelector('.city-second');
var city_ul = document.querySelector('.city-second').querySelector('ul');
var city_box = document.querySelector('.city-box');
var city_ul_with = city_ul.offsetWidth - 1060;
var mouse1X, mouse2X, dx, mdx, dnx;
city_box.addEventListener('mousedown', function (e) {
    var e = e || window.event;
    e.preventDefault();
    mouse1X = e.pageX;
    dx = city_box.offsetLeft;
    mdx = mouse1X - dx;
    document.addEventListener('mousemove', mouseMove2);
    document.addEventListener('mouseup', mouseUp2);
})

function mouseMove2(e) {
    dx = city_box.offsetLeft;
    var e = e || window.event;
    mouse2X = e.pageX;
    dnx = mouse2X - mdx;
    if (dnx < 0) {
        dnx = 0;
    } else if (dnx > 921) {
        dnx = 921;
    }
    city_box.style.left = dnx + "px";
    var cssIndex = (city_ul_with / 921) * dnx;
    city_ul.style.cssText = `transform:translate3d(${-cssIndex}px,0px,0px);`
}

function mouseUp2() {
    document.removeEventListener('mousemove', mouseMove2);
}
var dx;
var city_second = document.querySelector('.city-second');
city_second.addEventListener('mousewheel', function (e) {
    var e = e || window.event;
    e.preventDefault();
    dx = city_box.offsetLeft;
    if (dx < 10) {
        dx = 10;
    } else if (dx > 911) {
        dx = 911;
    }
    if (e.wheelDelta < 0) {
        city_box.style.left = dx + 10 + 'px';
        var cssIndex_1 = (city_ul_with / 921) * (dx + 10);
        city_ul.style.cssText = `transform:translate3d(${-cssIndex_1}px,0px,0px);
                                  transition:transform 0.8s ease-out 0s;`
    } else {
        city_box.style.left = dx - 10 + 'px';
        var cssIndex_2 = (city_ul_with / 921) * (dx - 10);
        city_ul.style.cssText = `transform:translate3d(${-cssIndex_2}px,0px,0px);
                                  transition:transform 0.8s ease-out 0s;`
    }
})

//   视频弹窗效果 start
let vedio_arr = [{
        location_vedio: '../w-images/vedio-1.mp4'
    },
    {
        location_vedio: '../w-images/vedio-2.mp4'
    },
    {
        location_vedio: '../w-images/vedio-3.mp4'
    },
    {
        location_vedio: '../w-images/vedio-4.mp4'
    },
    {
        location_vedio: '../w-images/vedio-5.mp4'
    },
    {
        location_vedio: '../w-images/vedio-6.mp4'
    },
    {
        location_vedio: '../w-images/vedio-7.mp4'
    },
    {
        location_vedio: '../w-images/vedio-8.mp4'
    },

]

// 获取弹窗
var modal = document.querySelector('.modal');
// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var maskImg = document.querySelectorAll('.mask-img');
var modalImg = document.querySelector(".img01");
var captionText = document.querySelector(".caption");
for (let index = 0; index < maskImg.length; index++) {
    maskImg[index].onclick = function () {
        modal.style.display = "block";
        modalImg.src = vedio_arr[index].location_vedio;
        captionText.innerHTML = this.alt;

    }
}

// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("close")[0];

// 当点击 (x), 关闭弹窗
span.onclick = function () {
    modal.style.display = "none";
    if (!modalImg) {
        return false;
    }
    if (modalImg.paused) {
        modalImg.play()
    } else {
        modalImg.pause()
    }
}
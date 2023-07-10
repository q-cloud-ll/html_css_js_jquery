var selected_news = document.querySelector(".m-news .part-tab-title").querySelectorAll('li');//新闻中心
var item_href = document.querySelectorAll('.item-href');//获取每一个li标签改变html值
var item_type = document.querySelectorAll('.item-type');
var arr = [
    {
        item_href0:'火炬接力将在北京冬奥会三个赛区进行！',
        item_href1:'火炬接力将在北京冬奥会三个赛区进行！',
        item_href2:'北京2022年冬奥会开幕倒计时100天主题活动隆重举行',
        item_href3:'俄媒：普京已受邀参加北京冬奥会开幕式',
        item_href4:'北京冬奥组委发布《北京2022年冬奥会和冬奥残会场馆配送指南（最终版）》',
        item_href5:'北京2022年冬奥会官方电影青年电影人全球招募活动评审结果公布',
        item_href6:'北京冬奥组委签约两家官方供应商',
    },
    {
        item_href0:'蔡奇主持召开会议，研究调度冬奥筹办、疫情防控、测试赛办赛工作',
        item_href1:'俄媒：普京已受邀参加北京冬奥会开幕式',
        item_href2:'中国雪橇运动员首次获得雪橇世界杯正赛资格',
        item_href3:'拜登称美国正考虑对北京冬奥会进行外交抵制',
        item_href4:'上百台机器人将服务冬奥主媒体中心，全天候服务！',
        item_href5:'北京2022年冬奥会开幕倒计时100天主题活动隆重举行',
        item_href6:'五棵松体育中心6小时“冰篮转换”',
    },
    {
        item_href0:'国际雪橇联合会主席赞赏中国为冰雪运动发展所做努力',
        item_href1:'五棵松体育中心6小时“冰篮转换',
        item_href2:'北京冬奥会人数最多的颁奖仪式这样演练',
        item_href3:'北京冬奥组委：测试赛相关工作进展顺利',
        item_href4:'“相约北京”冰球国内测试活动落幕 现场响起暖心生日歌',
        item_href5:'5G NR广播技术进行冬奥测试赛演练',
        item_href6:'国家体育馆医疗与防疫团队力保测试活动安全进行',
    },
    {
        item_href0:'【“加快建设京张体育文化旅游带”春季主题活动：春意盎然时，畅游冬奥城!',
        item_href1:'冬奥机遇！吉林、阿勒泰、崇礼、北京延庆 发展冰雪旅游新招频出',
        item_href2:'北京张山营将建冬奥冰雪休闲小镇',
        item_href3:'借势2022冬奥，冬季冰雪体育运动旅游带动城市发展',
        item_href4:'跟着总书记长见识 | 延庆赛区呈现“最美冬奥城”',
        item_href5:'来延庆畅玩5万平冰雪世界，感受冬奥魅力！',
        item_href6:'冬奥森林公园2020年底开园迎客',
    },
    {
        item_href0:'北京冬奥会共设7个大项和15个分项：',
        item_href1:'高山滑雪：男子滑降，女子滑降，男子回转，男子大回转，女子大回转，男子超级大回转，女子超级大回转，男子全能，女子全能和混合团体',
        item_href2:'冰壶：混双，男子，女子',
        item_href3:'雪橇：男子个人雪橇，女子个人雪橇，双人雪橇，团体接力',
        item_href4:'钢架雪车：男子钢架雪车，女子钢架雪车',
        item_href5:'跳台滑雪：男子个人标准台，女子个人标准台，男子大跳台，男子团体，混合团体',
        item_href6:'花样滑冰：男子个人滑，女子个人滑，冰上舞蹈，双人滑，团体赛',
    }
];
var item_href;
for (let i = 0; i < selected_news.length; i++) {
    selected_news[i].addEventListener("mousemove",function () {  
        for (let i = 0; i < selected_news.length; i++) {
            selected_news[i].className = '';
        }
        this.className = 'selected';
        switch (selected_news[i]) {
            case selected_news[0]:
                item_href[0].innerHTML = arr[0].item_href0;
                item_href[1].innerHTML = arr[0].item_href1;      
                item_href[2].innerHTML = arr[0].item_href2;
                item_href[3].innerHTML = arr[0].item_href3;
                item_href[4].innerHTML = arr[0].item_href4;
                item_href[5].innerHTML = arr[0].item_href5;
                item_href[6].innerHTML = arr[0].item_href6;
                break;
            case selected_news[1]:
                item_href[0].innerHTML = arr[1].item_href0;
                item_href[1].innerHTML = arr[1].item_href1;      
                item_href[2].innerHTML = arr[1].item_href2;
                item_href[3].innerHTML = arr[1].item_href3;
                item_href[4].innerHTML = arr[1].item_href4;
                item_href[5].innerHTML = arr[1].item_href5;
                item_href[6].innerHTML = arr[1].item_href6;
                break;
            case selected_news[2]:
                item_href[0].innerHTML = arr[2].item_href0;
                item_href[1].innerHTML = arr[2].item_href1;      
                item_href[2].innerHTML = arr[2].item_href2;
                item_href[3].innerHTML = arr[2].item_href3;
                item_href[4].innerHTML = arr[2].item_href4;
                item_href[5].innerHTML = arr[2].item_href5;
                item_href[6].innerHTML = arr[2].item_href6;
                break;
            case selected_news[3]:
                item_href[0].innerHTML = arr[3].item_href0;
                item_href[1].innerHTML = arr[3].item_href1;      
                item_href[2].innerHTML = arr[3].item_href2;
                item_href[3].innerHTML = arr[3].item_href3;
                item_href[4].innerHTML = arr[3].item_href4;
                item_href[5].innerHTML = arr[3].item_href5;
                item_href[6].innerHTML = arr[3].item_href6;
                break;
            case selected_news[4]:
                item_href[0].innerHTML = arr[4].item_href0;
                item_href[1].innerHTML = arr[4].item_href1;      
                item_href[2].innerHTML = arr[4].item_href2;
                item_href[3].innerHTML = arr[4].item_href3;
                item_href[4].innerHTML = arr[4].item_href4;
                item_href[5].innerHTML = arr[4].item_href5;
                item_href[6].innerHTML = arr[4].item_href6;
                break;
            default:
                break;
        }
    });
}

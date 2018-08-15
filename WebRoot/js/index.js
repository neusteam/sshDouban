window.addEventListener('load', () => {
	let movieData = "";
	let username = getCookie("username");
	if(username != null && username != ""){
		let rootUl = _prime(".index-right-nav")[0];
		
        //只改变文字
        rootUl.children[0].children[0].innerText = username;
        rootUl.children[0].setAttribute("href","./userinfo?user.username=" + username);

        //退出 （未完成）
        rootUl.children[1].setAttribute("href","./logout");
        rootUl.children[1].children[0].innerText = "退出";
		
	}
	
	
     $.ajax({
         type: "post",
         url: "http://localhost:8080/ssh01/findAllMovie",
         dataType:"JSON",
         contentType:"application/json;charset=utf-8",
         data: JSON.stringify({
             count: 20
         }),
         success: function(str) {
        	 movieData = JSON.parse(str);
        	/* console.log(movieData)*/
             initIndexContentItems(movieData)
         },
         error: function() {
             console.log("error");
         }
     })
     
//    initIndexContentItems(movieData);

    // _prime(".index-content")[0].addEventListener("click", (e) => {
    //     if (e.target.nodeName == "IMG") {
    //         _prime(".alert-box")[0].setAttribute("style", "background-color:rgba(0, 0, 0, .5);z-index:1");
    //         _prime(".alert-content")[0].setAttribute("style", "opacity:1;z-index:1");

    //         initModalContent(e.target.getAttribute("movieId"));
    //     }
    // })
    // _prime(".index-content")[1].addEventListener("click", (e) => {
    //     if (e.target.nodeName == "IMG") {
    //         _prime(".alert-box")[0].setAttribute("style", "background-color:rgba(0, 0, 0, .5);z-index:1");
    //         _prime(".alert-content")[0].setAttribute("style", "opacity:1;z-index:1");

    //         initModalContent(e.target.getAttribute("movieId"));
    //     }
    // })
    
   // _prime(".index-content")[2].addEventListener("click", (e) => {
   //     if (e.target.nodeName == "IMG") {
   //         _prime(".alert-box")[0].setAttribute("style", "background-color:rgba(0, 0, 0, .5);z-index:1");
   //         _prime(".alert-content")[0].setAttribute("style", "opacity:1;z-index:1");

   //         initModalContent(e.target.getAttribute("movieId"));
   //     }
   // })



   //  _prime(".close-button")[0].addEventListener("click", () => {
   //      _prime(".alert-box")[0].setAttribute("style", "background-color:rgba(0, 0, 0, 0);z-index:-1");
   //      _prime(".alert-content")[0].setAttribute("style", "z-index:-1;opacity:0");

   //      _prime(".alert-content")[0].innerHTML = "";
   //  })

    _prime("#order-date")[0].addEventListener("click", () => {
        $.ajax({
        type: "post",
        url: "",
        dataType:"JSON",
        contentType:"application/json;charset=utf-8",
        data: JSON.stringify({
            count: 5
        }),
        success: function(str) {
            movieData = JSON.parse(str);
            // console.log("Json:" + movieData)
            orderBy(movieData);
        },
        error: function() {
            console.log("error");
        }
        })
    })

    _prime("#order-average")[0].addEventListener("click", () => {
        $.ajax({
        type: "post",
        url: "",
        dataType:"JSON",
        contentType:"application/json;charset=utf-8",
        data: JSON.stringify({
            count: 5
        }),
        success: function(str) {
            movieData = JSON.parse(str);
            // console.log("Json:" + movieData)
            orderBy(movieData);
        },
        error: function() {
            console.log("error");
        }
        })
    })

})

const movieList = (movieData,count) => {
        let liArray = [];

    for (let i = 0; i < count; i++) {
        let rootLi = getDomElement("li", "", "");
        let ulNode = getDomElement("ul", "index-movies-item", ""),
            imageLiNode = getDomElement('li', "image", ""),
            imageANode = getDomElement('a',"",""),
            imageNode = getDomElement("img", "", ""),
            nameLiNode = getDomElement("li", "", movieData[i].moviename),
            scoreLiNode = getDomElement("li", "", ""),
            scoreSpanNode = getDomElement("span", "score", movieData[i].average + "分"),
            buttonLiNode = getDomElement("li", "", ""),
            buttonNode = getDomElement("button", "purchase", "选座购票");
        imageANode.setAttribute("href","./selectmovie?movieInfo.moviename=" + movieData[i].moviename);
        imageNode.setAttribute("src", "./" + movieData[i].picture);
        imageNode.setAttribute("movieId", movieData[i].movieId - 1);
        imageANode.appendChild(imageNode);
        imageLiNode.appendChild(imageANode);
        scoreLiNode.appendChild(scoreSpanNode);
        buttonLiNode.appendChild(buttonNode);
        ulNode.appendChild(imageLiNode);
        ulNode.appendChild(nameLiNode);
        ulNode.appendChild(scoreLiNode);
        ulNode.appendChild(buttonLiNode);
        rootLi.appendChild(ulNode);
        liArray.push(rootLi);
    }
    return liArray;
}

const initIndexContentItems = (movieData) => {

    let liArray = movieList(movieData,20);

    for (let i = 0; i < 5; i++) {
        // console.log("第一栏")
        _prime(".index-movies-silders")[0].appendChild(liArray[i]);
    }
    for (let i = 5; i < 10; i++) {
        // console.log("第二栏")
        _prime(".index-movies-silders")[1].appendChild(liArray[i]);
    }
    for (let i = 10; i < 15; i++) {
        // console.log("第三栏")
        _prime(".index-movies-silders")[2].appendChild(liArray[i]);
    }
}

const orderBy = (movieData) => {
    let liArray = movieList(movieData,5);

    for (let i = 0; i < 5; i++) {
        // console.log("第2栏")
        _prime(".index-movies-silders")[1].appendChild(liArray[i]);
    }
}

const initModalContent = (movieId) => {
    let h1Node = getDomElement("h1", "", movieData[movieId].moviename + " " + movieData[movieId].type),
        imgNode = getDomElement("img", "", ""),
        directorPNode = getDomElement("p", "", "导演 ： " + movieData[movieId].director),
        actorPNode = getDomElement("p", "", "演员 ： " + movieData[movieId].actor),
        typePNode = getDomElement("p", "", "类型 ： " + movieData[movieId].type),
        datePNode = getDomElement("p", "", "日期 ： " + movieData[movieId].date),
        countryPNode = getDomElement("p", "", "地区 ： " + movieData[movieId].country),
        lanPNode = getDomElement("p", "", "语言 ： " + movieData[movieId].language),
        scoreSpanNode = getDomElement("span", "score", movieData[movieId].average + "分"),
        scorePNode = getDomElement("p", "", "评分 ： ");
        describePNode = getDomElement("p", "describe", "电影描述 ： " + movieData[movieId].moviedescribe);

    imgNode.setAttribute("src", "./" + movieData[movieId].picture);
    scorePNode.appendChild(scoreSpanNode);

    let rootDiv = _prime(".alert-content")[0];
    rootDiv.appendChild(h1Node);
    rootDiv.appendChild(imgNode);
    rootDiv.appendChild(directorPNode);
    rootDiv.appendChild(actorPNode);
    rootDiv.appendChild(typePNode);
    rootDiv.appendChild(datePNode);
    rootDiv.appendChild(countryPNode);
    rootDiv.appendChild(lanPNode);
    rootDiv.appendChild(scorePNode);
    rootDiv.appendChild(describePNode);
}

// let order1 = [{"movieId":"2","moviename":"西红柿首富","date":"2018-07-27 00:00:00.0","director":"闫非/彭大魔","actor":"沈腾/张一鸣","type":"喜剧","country":"中国大陆","language":"普通话","picture":"image/xi.png","average":"6.8","moviedescribe":"《西虹市首富》的故事发生在《夏洛特烦恼》中的特烦恼之城西虹市。混迹于丙级业余足球队的守门员王多鱼（沈腾饰演），因比赛失利被开除离队。正处于人生最低谷的他接受了神秘台湾财团一个月花光十亿资金的挑战。本以为快乐生活就此开始，王多鱼却第一次感到“花钱特烦恼！想要人生反转走上巅峰，真的没有那么简单。"}, {"movieId":"3","moviename":"狄仁杰之四大天王","date":"2018-07-27 00:00:00.0","director":"徐克/陈国富","actor":"赵又廷/冯绍峰","type":"动作/悬疑/古装","country":"中国大陆/香港","language":"普通话","picture":"image/di.png","average":"6.7","moviedescribe":"狄仁杰（赵又廷 饰）大破神都龙王案，获御赐亢龙锏，并掌管大理寺，使他成为武则天（刘嘉玲 饰）走向权力之路最大的威胁。武则天为了消灭眼中钉，命令尉迟真金（冯绍峰 饰）集结实力强劲的「异人组」，妄图夺取亢龙锏。 在医官沙陀忠（林更新 饰）的协助下，狄仁杰既要守护亢龙锏，又要破获神秘奇案，还要面对武则天的步步紧逼，大唐江山陷入了空前的危机之中……"}, {"movieId":"4","moviename":"摩天营救","date":"2018-07-20 00:00:00.0","director":"罗森","actor":"强森/坎贝尔","type":"动作/惊悚/冒险","country":"美国","language":"英语/粤语/普通话","picture":"image/mo.png","average":"6.6","moviedescribe":"在香港市中心，世界上最高、结构最复杂的摩天大楼遭到破坏，危机一触即发。威尔·索耶（道恩·强森 饰）的妻子萨拉（内芙·坎贝尔 饰）和孩子们在98层被劫为人质，直接暴露在火线上。威尔，这位战争英雄、前联邦调查局救援队员，作为大楼的安保顾问，却被诬陷纵火和谋杀。他必须奋力营救家人，为自己洗脱罪名，关乎生死存亡的高空任务就此展开。"}, {"movieId":"5","moviename":"邪不压正","date":"2018-07-13 00:00:00.0","director":"姜文","actor":"彭于晏/姜文","type":"剧情/喜剧/动作","country":"中国大陆","language":"普通话","picture":"image/xie.png","average":"7.1","moviedescribe":"七七事变前夕，华裔青年小亨德勒（彭于晏 饰）从美国远赴重洋，回到阔别十数年之久的北平从医。然而他真正的名字叫李天然，十三岁那年曾亲眼目睹师父一家遭师兄朱潜龙（廖凡 饰）和日本人根本一郎（泽田谦也 饰）灭门。侥幸逃生的天然被美国人亨德勒医生送往大洋彼岸，接受了极其严苛的训练，而今他怀着绝密的任务踏上故土。亨德勒父子租住神秘男子蓝青峰（姜文 饰）的宅子，蓝是当年辛亥革命的参与者，他与现为警察局长的朱潜龙过从甚密，却又以杀死李天然为筹码，暗中怂恿朱除掉根本一郎。复仇心切的李天然寻找到了仇人，而亨德勒医生则全力阻止养子冒险。在这一过程中，交际花唐凤仪（许晴 饰）与裁缝关巧红（周韵 饰）也卷入了男人的勾心斗角的漩涡里。直到七七事变爆发，所有的矛盾迎来了决断的时刻…… "}, {"movieId":"1","moviename":"我不是药神","date":"2018-07-07 00:00:00.0","director":"文牧野","actor":"徐峥/王传君","type":"剧情/喜剧","country":"中国大陆","language":"普通话","picture":"image/yao.png","average":"8.9","moviedescribe":"普通中年男子程勇（徐峥 饰）经营着一家保健品店，失意又失婚。不速之客吕受益（王传君 饰）的到来，让他开辟了一条去印度买药做代购的新事业，虽然困难重重，但他在这条买药之路上发现了商机，一发不可收拾地做起了治疗慢粒白血病的印度仿制药独家代理商。赚钱的同时，他也认识了几个病患及家属，为救女儿被迫做舞女的思慧（谭卓 饰）、说一口流利神父腔英语的刘牧师（杨新鸣 饰），，以及脾气暴烈的黄毛（章宇 饰），几个人合伙做起了生意，利润倍增的同时也危机四伏。程勇昔日的小舅子曹警官（周一围 饰）奉命调查仿制药的源头，假药贩子张长林（王砚辉 饰）和瑞士正牌医药代表（李乃文 饰）也对其虎视眈眈，生意逐渐变成了一场关于救赎的拉锯战。 "}, {"movieId":"6","moviename":"侏罗纪世界2","date":"2018-06-15 00:00:00.0","director":"胡安·安东尼奥·巴亚纳","actor":"科林·特雷沃罗/ 布莱丝·达拉斯·霍华德","type":"动作/科幻/冒险","country":"美国/西班牙","language":"英语","picture":"image/zhu.png","average":"6.8","moviedescribe":"侏罗纪世界主题公园及豪华度假村被失控的恐龙们摧毁已有三年。如今，纳布拉尔岛已经被人类遗弃，岛上幸存的恐龙们在丛林中自给自足。 当岛上的休眠火山开始活跃以后，欧文（克里斯·帕拉特 饰）与克莱尔（布莱丝·达拉斯·霍华德 饰）发起了一场运动，想要保护岛上幸存的恐龙们免于灭绝。 欧文一心想要找到自己依然失踪在野外的迅猛龙首领布鲁，克莱尔如今也尊重起这些生物，以保护它们为己任。两人在熔岩开始喷发时来到了危险的小岛，他们的冒险也揭开了一个可能让地球回到史前时代般混乱秩序的阴谋。"}, {"movieId":"7","moviename":"死侍2","date":"2018-05-18 00:00:00.0","director":"大卫·雷奇","actor":"瑞恩·雷诺兹 / 乔什·布洛林 ","type":"喜剧/动作/科幻/冒险","country":"美国","language":"英语","picture":"image/dp.png","average":"7.7","moviedescribe":"拥有不死之身的死侍韦德·威尔森（瑞恩·雷诺兹 Ryan Reynolds 饰）继续在惩恶扬善、毒舌嘴贱的路上绝命狂奔，与此同时他和女友瓦内莎（莫蕾娜·巴卡林 Morena Baccarin 饰）的爱情逐渐升华，两人全新期待新生命的到来。谁知命运难测，因瓦内莎意外身亡，韦德万念俱灰，绝望地渴求生命的终结。在他最失落的时候，钢力士和少年弹头等将他领走，成为X战警中的一员。在某次行动中，死侍因袒护暴走的14岁变种人拉塞尔（朱利安·迪尼森 Julian Dennison 饰）而随同对方被关入冰盒监狱。没过多久，来自未来的电索（乔什·布洛林 Josh Brolin 饰）闯入监狱，意图杀死在未来引起无数灾难的拉塞尔。为了阻止电索，逃离监狱的死侍找到一群战友与之对抗，而拉塞尔则朝着黑暗渐渐远去…… "}, {"movieId":"9","moviename":"超时空同居","date":"2018-05-18 00:00:00.0","director":"苏伦","actor":"雷佳音 / 佟丽娅","type":"喜剧/爱情/奇幻","country":"中国大陆","language":"普通话","picture":"image/chao.png","average":"7.0","moviedescribe":"生活在2018年的大龄女青年谷小焦（佟丽娅 饰），梦想能够嫁一个能买得起她幼时豪宅的有钱人，却屡屡受挫，只能蜗居在一栋老居民楼里。生活在1999年的陆鸣（雷佳音 饰）手握着自己设计的宏伟蓝图，却始终找不到投资人，同时也面临重大的事业危机。奇怪的时刻来临了，失意的两个人回到家中居然发生了惊人的一幕，同一扇门关上后居然是两个时空的交汇点，两个不同时空的人相遇了，为了拯救自己的未来，两人共商大计，开启了幻想一夜暴富的一系列措施，引发了啼笑皆非的连锁反应。而他们不知道的是，两个时空的重叠是人为的操控，他们每走一步都会引发不可预知的结果，更要命的事，本来只是视对方为赚钱拍档的两人引发了爱的火花……"}, {"movieId":"10","moviename":"复仇者联盟3：无限战争","date":"2018-05-11 00:00:00.0","director":"安东尼·罗素 / 乔·罗素","actor":"小罗伯特·唐尼 / 克里斯·海姆斯沃斯","type":"动作/科幻/奇幻/冒险","country":"美国","language":"英语","picture":"image/fu.png","average":"8.2","moviedescribe":"《复仇者联盟3：无限战争》是漫威电影宇宙10周年的历史性集结，将为影迷们带来史诗版的终极对决。面对灭霸突然发起的闪电袭击，复仇者联盟及其所有超级英雄盟友必须全力以赴，才能阻止他对全宇宙造成毁灭性的打击。"}, {"movieId":"8","moviename":"头号玩家（ReadyPlayerOne）","date":"2018-03-30 00:00:00.0","director":"史蒂文·斯皮尔伯格","actor":"泰伊·谢里丹 / 奥利维亚·库克","type":"动作/科幻/冒险","country":"美国","language":"英语","picture":"image/tou.png","average":"8.7","moviedescribe":"故事发生在2045年，虚拟现实技术已经渗透到了人类生活的每一个角落。詹姆斯哈利迪（马克·里朗斯 Mark Rylance 饰）一手建造了名为绿洲的虚拟现实游戏世界，临终前，他宣布自己在游戏中设置了一个彩蛋，找到这枚彩蛋的人即可成为绿洲的继承人。要找到这枚彩蛋，必须先获得三把钥匙，而寻找钥匙的线索就隐藏在詹姆斯的过往之中。 韦德（泰尔·谢里丹 Tye Sheridan 饰）、艾奇（丽娜·维特 Lena Waithe 饰）、大东（森崎温 饰）和修（赵家正 饰）是游戏中的好友，和之后遇见的阿尔忒弥斯（奥利维亚·库克 Olivia Cooke 饰）一起，五人踏上了寻找彩蛋的征程。他们所要对抗的，是名为诺兰索伦托（本·门德尔森 Ben Mendelsohn 饰）的大资本家。"}];

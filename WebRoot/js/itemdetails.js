window.addEventListener('load', () => {
	
	let username = getCookie("username");
	let submitUsername = _prime("#input-username")[0];
	
	submitUsername.setAttribute("value",username);

	// setCommentDom(getCommentList(comment,comment.length));
	
	$.ajax({
        type: "post",
        url: "http://localhost:8080/ssh01/findcomments",
        dataType:"JSON",
        contentType:"application/json;charset=utf-8",
        data: JSON.stringify({
            moviename: _prime("#input-moviename")[0].getAttribute("value")
       }),
        success: function(str) {
        	console.log(str)
        	commentData = JSON.parse(str);
            setCommentDom(getCommentList(commentData,commentData.length));
        },
        error: function() {
            console.log("error");
        }
    })
})

const anchor = () => {
	_prime("#comment-textarea")[0].scrollIntoView();
}

//<li>
//<p>该用户的姓名 <span class="score">分数</span> <span class="timestamp">2018-10-10</span></p>
//<div class="comment-content">评论内容 : 多人版《荒岛求生》，孤岛版《欢迎来到东莫村》…TB船车也太高级了，都想作死体验一把了，哈哈哈！故事其实挺通俗易懂、当荒岛生存冒险片看也不赖。可解读内容多，黄渤导演野心很大，也很努力想拍好，虽然想讲的东西略多，片子再短一点或许更好。看《瓣嘴》黄渤自造差评，看完正片后超出了预期。片尾两彩蛋，字幕最后的徐峥彩蛋加分。</div>
//</li>
const getCommentList = (commentData,count) => {
    let liArray = [];

    for (let i = 0; i < count; i++) {

    let rootLi = getDomElement("li","",""),
        userInfoPNode = getDomElement("p","",commentData[i].username),
        scoreSpanNode = getDomElement("span","score"," " + commentData[i].score + "分 "),
        dateSpanNode = getDomElement("span","timestamp",commentData[i].date),
        contentDivNode = getDomElement("div","comment-content",commentData[i].comments);
    
    userInfoPNode.appendChild(scoreSpanNode);
    userInfoPNode.appendChild(dateSpanNode);
    rootLi.appendChild(userInfoPNode);
    rootLi.appendChild(contentDivNode);

    liArray.push(rootLi);

    }
    return liArray;
}

const setCommentDom = (commentDomList) => {
	for(let i = 0;i< commentDomList.length;i++){
		_prime(".comment-list")[0].appendChild(commentDomList[i]);
	}
}

// let comment = [{"id":"4","score":"5.0","comments":"文牧野眼睛太毒了，观众的笑点、泪点、痛点被他牢牢抓住，徐峥现在不拼演技开始掏心炸肺放脱自我了，药物在中国绝对是个“不可说”，但这个电影说了它能说的，也不显山不漏水的说了它所不能说的，讲的是现实，但看过电影之后才会明白其实是超现实，2018最佳!","username":"123","moviename":"我不是药神","date":"1970-01-01 08:00:00.0"}, {"id":"5","score":"8.0","comments":"电影能做到的好，这部电影都做到了。剩下的是这个时代不让它更好。在我们刚刚经历过的时代巨变洪流之中，有无数这样的小人物在时代洪流中艰难生存着，同时在竭力不丢失他们的灵魂。终于有这样一部电影，让我们能够看到时代，看到善意，看到希望。希望这部电影也能被这个时代善待。","username":"2015214256","moviename":"我不是药神","date":"1970-01-01 08:00:00.0"}, {"id":"6","score":"6.0","comments":"炸裂，哭成狗，从观影体验上看，比达拉斯买家俱乐部好，之间隔了差不多五个《动物世界》，导演处女作就这完成度，只能说剧本实在太好。我爸爸也是药神的受益者之一，否则我应该房子也没了。感谢他们。","username":"464839566@qq.com","moviename":"我不是药神","date":"1970-01-01 08:00:00.0"}];
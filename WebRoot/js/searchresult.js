window.addEventListener('load', () => {
	let username = getCookie("username");
	let a = _prime(".index-right-nav")[0];

	if(username != ""){
		let rootUl = _prime(".index-right-nav")[0];

		//只改变文字
		rootUl.children[0].children[0].innerText = username;
		rootUl.children[0].setAttribute("href","./userinfo?user.username=" + username);

		//退出 （未完成）
		rootUl.children[1].setAttribute("href","");
		rootUl.children[1].children[0].innerText = "退出";
		
		
	}
}



const getDomElement = (type, className, text) => {
    let domNode = document.createElement(type);
    let textNode = document.createTextNode(text);

    domNode.appendChild(textNode);
    domNode.className = className;

    return domNode;
}
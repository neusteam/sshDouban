window.addEventListener('load', () => {
	
	let username = getCookie("username");
	let submitUsername = _prime("#input-username")[0];
	
	submitUsername.setAttribute("value",username);
})

const anchor = () => {
	_prime("#comment-textarea")[0].scrollIntoView();
}
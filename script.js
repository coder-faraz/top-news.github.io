
document.body.style.backgroundColor='lightpink';
document.body.style.color='maroon';
document.body.style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.margin='0';
document.body.style.padding=0;


function modifications(element) {

	element.style.fontSize='18px';
	element.style.fontWeight='700';
	element.style.color='maroon';
	element.style.background='none';
	element.style.border='3px solid maroon';
	element.style.borderRadius='8px';
	element.style.padding='8px';
	element.style.marginLeft='15px';
	element.style.cursor='pointer';
}


const students = [
	{name: "Faraz", subject: "JavaScript"},
	{name: "Vaibhav", subject: "Python"},
	{name: "Rohit", subject: "Web Design"}
]


//Ques.) Use a dictionary api to search for the meaning of a word & populate it


//News Api key - ae4a78988749452c8bacd793bbc6a65d


let headingOne = document.getElementById('headingOne').children[0];

headingOne.addEventListener('click', openAcc);


function openAcc() {
	const xhr = new XMLHttpRequest();
	
	xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ae4a78988749452c8bacd793bbc6a65d', true);
	xhr.send();

	xhr.onload = function() {
		console.log(this.responseText);
	}
}























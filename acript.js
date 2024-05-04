const text = "This is an example text that appears word by word.";
const textContainer = document.getElementById("text");
let index = 0;

function typeWriter() {
	if (index < text.length) {
		textContainer.innerHTML += text.charAt(index);
		index++;
		setTimeout(typeWriter, 100); 
	}
}

typeWriter();
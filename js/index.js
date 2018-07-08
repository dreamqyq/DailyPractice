var listBtn = document.getElementById('catalogue'),
	list = document.getElementById('list');

listBtn.onclick = function () {
	this.classList.toggle('active');
	list.classList.toggle('active');
}
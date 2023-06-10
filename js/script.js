const navLink = document.querySelectorAll('.nav-link');

const activeLink = function() {
	this.classList.toggle('active');
	
}

for(let navItem of navLink) {
	navItem.addEventListener('click', activeLink);
}
const orderBtns = document.querySelectorAll('.order-btn');

orderBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const cakePrice = btn.previousSibling.previousSibling.textContent;
		alert(`You have ordered a cake for $${cakePrice}!`);
		document.querySelector('.order-success').style.display = 'block';
	});
});


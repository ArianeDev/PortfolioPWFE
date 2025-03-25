const openButtons = document.querySelectorAll('.openModal');

openButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modalId = button.getAttribute('data-modal');
		const modal = document.getElementById(modalId);

		modal.showModal();
	});
});

const closeButtons = document.querySelectorAll('.closeModal');

closeButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modalId = button.getAttribute('data-modal');
		const modal = document.getElementById(modalId);

		modal.close();
	})
})
const supportButton = document.querySelector('.feedback__recieve');
const feedbackArea = document.querySelector('.feedback__area');
const feedbackIcon = supportButton.querySelector('.feedback__receive-icon');

const onSupportButtonClick = () => {
	feedbackArea.classList.toggle('feedback__area--opened');
	feedbackArea.classList.toggle('feedback__area--closed');

	const isOpened = feedbackArea.classList.contains('feedback__area--opened');
	const iconPath = isOpened ? 'close' : 'open';
	feedbackIcon.src = `img/icons/chat-${iconPath}-icon.png`
};

supportButton.addEventListener('click', onSupportButtonClick);

// Изменять иконки по клику
// Удалять обработчик
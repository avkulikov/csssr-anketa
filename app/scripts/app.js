import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

$(document).ready(function (){
	// JS skill range slider
	const range = $( '.jsSkills__label' );
	const pointer = $( '.jsSkills__pointer' );

	range.click(function () {
		const currentRange = pointer.attr( 'class' ).split(' ').slice(1);
		const chosenRange = $( this ).attr( 'class' ).split(' ').slice(1);

		pointer.removeClass( currentRange[0] );

		switch ( chosenRange[0] ) {
			case 'jsSkills__label_no':
				pointer.addClass( 'jsSkills__pointer_no' );
				break;
			case 'jsSkills__label_use':
				pointer.addClass( 'jsSkills__pointer_use' );
				break;
			case 'jsSkills__label_edit':
				pointer.addClass( 'jsSkills__pointer_edit' );
				break;
			case 'jsSkills__label_write':
				pointer.addClass( 'jsSkills__pointer_write' );
				break;
		}
	});

	const textarea = document.querySelector('textarea');
	const initialHeight = 58;

	const resize = () => {
		textarea.style.height = `${initialHeight}px`;
		const height = textarea.scrollHeight;
		textarea.style.height = `${height + initialHeight}px`;
	};

	resize();

	textarea.addEventListener('input', resize);
});

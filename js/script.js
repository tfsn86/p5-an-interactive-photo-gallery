$(document).ready(function () {
	let $searchInput = $('#searchInput');
	let $a = $('a');

	$searchInput.keyup((event) => {
		let value = $searchInput.val().toLowerCase();
		$a.show();
		if (value !== '') {
			$a.not('[data-title*="' + value + '"]').hide();
		}
	});
});

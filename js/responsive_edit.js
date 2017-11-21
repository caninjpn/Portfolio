function checkWidth() {
    if ($(window).width() < 726) {
        $('#glow_txt').addClass('show');
        $('#glow_txt2').addClass('show');
        $('#glow_txt3').addClass('show');
    } else {
        $('#glow_txt').removeClass('show');
		$('#glow_txt2').removeClass('show');
        $('#glow_txt3').removeClass('show');
    }
}

$(window).resize(checkWidth);
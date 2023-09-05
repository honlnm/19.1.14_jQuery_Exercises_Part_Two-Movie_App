
//creating new divs after form-container to stay above script tags
$('#submit-button').on("click", function () {
    if (+$('#movie-rating').val() < 0 || +$('#movie-rating').val() > 10) {
        return alert('Rating must be between 0 and 10');
    } else if (+$('#movie-title').val().length < 2) {
        return alert('Movie Title must have at least 2 characters');
    } else {
        let $MovieTitle = $('#movie-title').val();
        let $Rating = $('#movie-rating').val();
        $('#ratings-label-container').after("<div>");
        $('div').eq(2).attr('class', "rated");
        $('<hgroup>').appendTo($('div').eq(2));
        $('<h3>').appendTo($('hgroup').first());
        $('h3').first().text($MovieTitle);
        $('<p>').appendTo($('hgroup').first());
        $('p').first().text($Rating);
        $('<button>').appendTo($('hgroup').first());
        $('button').eq(1).text('Delete').attr({
            class: 'delete-button',
            type: 'button'
        });
        $('.delete-button').on("click", function (evt) {
            $(evt.target).parent().remove();
        });
        $('input').val('');
    }
});

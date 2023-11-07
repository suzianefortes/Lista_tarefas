$(document).ready(function() {
    $('#Form-list').submit(function(event) {
        event.preventDefault();
        var taskText = $('#Input-item').val();
        if (taskText.trim() !== '') {
            var listItem = $('<li>' + taskText + '</li>');
            $('#List').append(listItem);
            $('#Input-item').val('');
        }
    });

    $('#List').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

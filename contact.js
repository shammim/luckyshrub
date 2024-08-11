$(document).ready(function() {
    // Handle contact form submission
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        let name = $('#name').val('Joe');
        let email = $('#email').val('someone@example.com');
        let number = $('number').val('00-888-7765');
        let message = $('#message').val('please type something');

        // Here, you would normally send the form data to your server
        console.log('Form submitted:', { name, email, message });

        alert('Thank you for contacting us (#name) ! We will get back to you soon.');

        // Clear the form
        $('#name').val('Joe');
        $('#email').val('someone@example.com');
        $('number').val('00-888-7765');
        $('#message').val('--');
    });

    // Toggle chat box visibility
    $('#chatButton').on('click', function() {
        $('#chatBox').toggleClass('hidden');
    });

    // Handle chat input
    $('#chatInput').on('keypress', function(event) {
        if (event.which === 13 && $(this).val() !== '') { // Enter key pressed
            let message = $(this).val();
            $('#messages').append('<div class="bg-gray-200 p-2 rounded mb-2 text-right">' + message + '</div>');
            $(this).val('');

            // Here, you would normally send the chat message to your server
            console.log('Chat message:', message);
        }
    });
});

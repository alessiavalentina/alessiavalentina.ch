---
layout: default
title: Alessia Valentina's Figure Skating Journey
---

<!-- Wrapper -->
<div id="wrapper" class="divided">

    <!-- Banner -->
    {% include banner.html %}

    <!-- Spotlight -->
    {% include spotlight.html %}

    <!-- Gallery -->
    {% include gallery.html %}

    <!-- Contact -->
    <section class="wrapper style1 align-center">
        <div class="inner medium">
            <h2>Get in touch</h2>
            <form id="contactForm" method="post" action="#">
                <div class="fields">
                    <div class="field half">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" value="" />
                    </div>
                    <div class="field half">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" value="" />
                    </div>
                    <div class="field">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                </div>
                <ul class="actions special">
                    <li><input type="submit" name="submit" id="submit" value="Send Message" /></li>
                </ul>
            </form>
        </div>
    </section>

    <!-- Follow -->
    <section class="wrapper style1 align-center">
        <div class="inner">
            <h2>Follow</h2>
            <ul class="icons">
                <li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
            </ul>
        </div>
    </section>

    <!-- Footer -->
    <footer class="wrapper style1 align-center">
        <div class="inner">
            <p>&copy; 2024 alessiavalentina.ch | a <a href="https://html5up.net">html5up</a> theme</p>
        </div>
    </footer>

</div>

<script>
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser

        // Collect form data
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'message': $('textarea[name=message]').val()
        };

        // Send the data using AJAX
        $.ajax({
            type: 'POST',
            url: 'https://formspree.io/f/mgvwwgry', // Replace with your Formspree URL or your server endpoint
            data: formData,
            dataType: 'json',
            encode: true,
            success: function(response) {
                alert('Thank you for contacting us!');
                $('#contactForm')[0].reset(); // Reset the form
            },
            error: function(error) {
                alert('There was an error sending your message.');
            }
        });
    });
});
</script>

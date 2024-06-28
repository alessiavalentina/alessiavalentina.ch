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
            <form method="post" action="#">
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

    <!-- Footer -->
    <footer class="wrapper style1 align-center">
        <div class="inner">
            <p>&copy; 2024 alessiavalentina.ch | a <a href="https://html5up.net">html5up</a> theme</p>
        </div>
    </footer>

</div>

<!-- Scripts -->
<script src="{{ site.baseurl }}/assets/js/jquery.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/jquery.scrollex.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/jquery.scrolly.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/browser.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/breakpoints.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/util.js"></script>
<script src="{{ site.baseurl }}/assets/js/main.js"></script>

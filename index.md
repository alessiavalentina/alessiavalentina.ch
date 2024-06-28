---
layout: default
title: Alessia Valentina's Figure Skating Journey
---

<!-- Wrapper -->
<div id="wrapper" class="divided">

<section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
    <div class="content">
        <h1>Alessia Valentina's</h1>
        <p class="major">Figure Skating Journey</p>
        <ul class="actions stacked">
            <li><a href="#first" class="button big wide smooth-scroll-middle">Follow</a></li>
        </ul>
    </div>
    <div class="image">
        <img src="{{ site.baseurl }}/images/banner.jpg" alt="" />
    </div>
</section>

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

<script lang="ts">

    let src: string = "assets/images/me.jpg";
    let alt: string = "dave_eje";
    let loading: string = "lazy";

    let bioText: string = "I am an Innopolis University Computer Science Undergraduate. I am a passionate learner. A full stack machine learning engineer with 3+ years experience in Machine Learning, AWS services and Backend frameworks like Django. I am currently learning React and other frontend frameworks.";
</script>

<section class="hero" id="about">
    <img {src} {alt} {loading} class="hero-img" />
    <div class="bio animate__animated animate__shakeX">
        <h2 class="bio-title">About Me</h2>
        <p class="bio-text">
            {bioText}
        </p>
    </div>
</section>

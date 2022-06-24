<script lang="ts">

    let imgSrcs1: string[] = ["assets/icons/python.jfif", "assets/icons/django.png", "assets/icons/pytorch.png"];

    let imgSrcs2: string[] = ["assets/icons/html.png", "assets/icons/tensorflow.png", "assets/icons/mysql.png"];

</script>

<section class="skills" id="skills">
    <h2 class="skill-header">My Top Skills</h2>

    <div class="skills-wrapper">
        <div class="first-set animate__animated animate__pulse">
            {#each imgSrcs1 as srcs1}
            <img src={srcs1} alt="" loading="lazy" class="icon icon-card">
            {/each}
        </div>

        <div class="second-set animate__animated animate__pulse">
            {#each imgSrcs2 as srcs2}
            <img src={srcs2} alt="" loading="lazy" class="icon icon-card">
            {/each}
        </div>
    </div>
</section>
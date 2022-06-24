<script lang="ts">

    interface imgEle {
        href: string;
        src: string;
        alt: string;
    }

    let images: imgEle[] = [
        {
            href: "https://t.me/David_ej",
            src: "assets/icons/telegram.jfif",
            alt: "Telegram"
        },
        {
            href: "https://www.instagram.com/",
            src: "assets/icons/instagram.jfif",
            alt: "Instagram"
        },
        {
            href: "https://www.linkedin.com/",
            src: "assets/icons/linkedin.png",
            alt: "LinkedIn"
        },
        {
            href: "https://github.com/Ejedavy",
            src: "assets/icons/github.png",
            alt: "Github"
        },
    ];
</script>

<div class="socials">
    {#each images as img}
    <a href={img.href} target="_blank"
        ><img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            class="socicon"
        /></a
    >
    {/each}
</div>

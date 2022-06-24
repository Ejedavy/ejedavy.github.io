<script lang="ts">
    interface projectElement {
        title: string;
        projectDetails: string;
        alt: string;
        src: string;
    }

    let projects: projectElement[] = [
        {
            src: "assets/images/stock.jfif",
            title: "Stock Market Predictor",
            projectDetails:
                "This is a stock market predictor, predicting the Tesla stock market. It had a 80% accuracy on the prediction.",
            alt: "stock-market",

        },
        {
            src: "assets/images/bot.jfif",
            title: "AI Chat Bot",
            projectDetails:
                "This is a chat bot created using Artificial Intelligence and natural language processing. The bot was able to have a descent conversation.",
            alt: "chat",
        },
        {
            src: "assets/images/chat.svg",
            title: "EdTech E-learning Platform",
            projectDetails:
                "This is a chat app built using django and flutter. It supports video call, delete message, voice call, replies.",
            alt: "learning",
        },
    ];
</script>

<section class="projects" id="projects">
    <h2 class="projects-title">Some of my Recent Projects</h2>
    <div class="projects-container">
        {#each projects as projectele}
            <div class="project-container project-card">
                <img
                    src={projectele.src}
                    alt={projectele.alt}
                    loading="lazy"
                    class="project-pic"
                />
                <h3 class="project-title">{projectele.title}</h3>
                <p class="project-details">
                    {projectele.projectDetails}
                </p>
                <a href="#" target="_blank" class="project-link">Check it Out</a
                >
            </div>
        {/each}
    </div>
</section>

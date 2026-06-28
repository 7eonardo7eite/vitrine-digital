const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-item__question");

    question.addEventListener("click", () => {
        const answer = item.querySelector(".faq-item__answer");
        const arrow = item.querySelector(".faq-item__icon img");

        // Fecha os outros
        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
                i.querySelector(".faq-item__answer").style.maxHeight = null;
                i.querySelector(".faq-item__icon img").style.transform = "rotate(0deg)";
            }
        });

        // Alternar este
        if (item.classList.contains("active")) {
            item.classList.remove("active");
            answer.style.maxHeight = null;
            arrow.style.transform = "rotate(0deg)";
        } else {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            arrow.style.transform = "rotate(-90deg)";
        }
    });
});
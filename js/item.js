document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".item_tab");
    const contents = document.querySelectorAll(".item_content");
    const detail = document.getElementById("itemDetail");
    const detailName = document.getElementById("detailName");
    const detailTarget = document.getElementById("detailTarget");
    const cards = document.querySelectorAll(".item_card");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const category = tab.dataset.category;
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            contents.forEach(content => {
                if (content.id === category) {
                    content.hidden = false;
                } else {
                    content.hidden = true;
                }
            });
            cards.forEach(card => card.classList.remove("selected"));
            detail.classList.add("empty");
            detailName.textContent = "";
            detailTarget.textContent = "";
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            detail.classList.remove("empty");
            detailName.textContent = card.dataset.name;
            detailTarget.textContent = card.dataset.target;
        });
    });
});
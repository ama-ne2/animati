document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("userName");
    const languageSelect = document.getElementById("language");

    const savedName = localStorage.getItem("userName");
    const savedLanguage = localStorage.getItem("language");

    if (savedName) {
        nameInput.value = savedName;
    }

    if (savedLanguage) {
        languageSelect.value = savedLanguage;
    }

    nameInput.addEventListener("input", () => {
        localStorage.setItem("userName", nameInput.value);
    });

    languageSelect.addEventListener("change", () => {
        localStorage.setItem("language", languageSelect.value);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const favoriteAdd = document.querySelector(".favorite_add");
    const mypageTitle = document.querySelector(".mypage h1");
    const mypageForm = document.querySelector(".mypage_form");
    const favoriteTitle = document.querySelector(".favorite_title");
    const animalSelect = document.getElementById("animalSelect");
    const animalCards = document.querySelectorAll(".animal_select .animal_card");

    favoriteAdd.addEventListener("click", () => {
        mypageTitle.hidden = true;
        mypageForm.hidden = true;
        favoriteTitle.hidden = true;
        favoriteAdd.hidden = true;
        animalSelect.hidden = false;
    });

    animalCards.forEach(card => {
        card.addEventListener("click", () => {
            const animalName = card.dataset.name;
            const animalImage = card.dataset.image;

            console.log("選択した動物：", animalName);
            console.log("画像：", animalImage);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const animalButton = document.querySelector(".animal_btn");
    const profileModal = document.getElementById("profileModal");
    const profileClose = document.getElementById("profileClose");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const profileImage = document.getElementById("profileImage");
    const profileName = document.getElementById("profileName");
    const profileGender = document.getElementById("profileGender");
    const profileHeart = document.getElementById("profileHeart");
    const zooName = document.getElementById("zooName");
    const zooLink = document.getElementById("zooLink");
    const profilePersonality = document.getElementById("profilePersonality");
    const profileFeature = document.getElementById("profileFeature");
    const profilePlace = document.getElementById("profilePlace");
    const profileFood = document.getElementById("profileFood");
    const browserSearch = document.getElementById("browserSearch");

    animalButton.addEventListener("click", () => {
        const animalName = animalButton.dataset.name;
        const zoo = animalButton.dataset.zoo;
        const image = animalButton.dataset.image;
        const gender = animalButton.dataset.gender;
        const heart = animalButton.dataset.heart;
        const personality = animalButton.dataset.personality;
        const feature = animalButton.dataset.feature;
        const place = animalButton.dataset.place;
        const food = animalButton.dataset.food;

        profileImage.src = image;
        profileImage.alt = animalName + "の写真";

        profileName.textContent = animalName;

        profileGender.src = gender;
        profileGender.alt = animalName + "の性別";

        profileHeart.textContent = heart;

        zooName.textContent = zoo;

        profilePersonality.textContent = personality;

        profileFeature.textContent = feature;

        profilePlace.src = place;
        profilePlace.alt = animalName + "の出現場所";

        profileFood.src = food;
        profileFood.alt = animalName + "の好きな餌";

        const zooSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(zoo);
        zooLink.href = zooSearchUrl;

        const animalSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(zoo + " " + animalName);
        browserSearch.href = animalSearchUrl;

        profileModal.hidden = false;
    });

    profileClose.addEventListener("click", () => {
        profileModal.hidden = true;
    });

    modalBackdrop.addEventListener("click", () => {
        profileModal.hidden = true;
    });
});
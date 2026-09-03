document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("userName");
    const languageSelect = document.getElementById("language");
    const favoriteAdd = document.getElementById("favoriteAdd");
    const mypageTitle = document.querySelector(".mypage h1");
    const mypageForm = document.querySelector(".mypage_form");
    const favoriteArea = document.getElementById("favoriteArea");
    const favoriteTitle = document.getElementById("favoriteTitle");
    const favoriteRegistered = document.getElementById("favoriteRegistered");
    const favoriteAnimalImage = document.getElementById("favoriteAnimalImage");
    const animalChange = document.getElementById("animalChange");
    const animalSelect = document.getElementById("animalSelect");
    const animalBack = document.getElementById("animalBack");
    const animalCards = document.querySelectorAll(".animal_select .animal_card");
    const animalConfirm = document.getElementById("animalConfirm");
    const confirmAnimalName = document.getElementById("confirmAnimalName");
    const confirmYes = document.getElementById("confirmYes");
    const confirmNo = document.getElementById("confirmNo");
    const affectionBarFill = document.getElementById("affectionBarFill");
    const affectionValue = document.getElementById("affectionValue");
    const rewardOpen = document.getElementById("rewardOpen");
    const rewardModal = document.getElementById("rewardModal");
    const rewardClose = document.getElementById("rewardClose");

    let selectedAnimalName = "";
    let selectedAnimalImage = "";

    const initialAffection = {
        "ダンダン": 0,
        "のりん": 0,
        "さき": 0,
        "コウ": 1
    };

    function getAffectionKey(animalName) {
        return `affection_${animalName}`;
    }

    function getAnimalAffection(animalName) {
        const key = getAffectionKey(animalName);
        const savedAffection = localStorage.getItem(key);

        if (savedAffection !== null) {
            return Number(savedAffection);
        }

        const initialValue = initialAffection[animalName] ?? 0;
        localStorage.setItem(key, String(initialValue));

        return initialValue;
    }

    function updateAffection(value) {
        const maxAffection = 100;
        const safeValue = Math.min(Math.max(Number(value), 0), maxAffection);

        affectionValue.textContent = safeValue;
        affectionBarFill.style.width = safeValue + "%";
    }

    function showFavoriteAnimal(name, image) {
        mypageTitle.hidden = false;
        mypageForm.hidden = false;
        favoriteArea.hidden = false;
        favoriteTitle.hidden = false;
        favoriteTitle.textContent = name;
        favoriteAdd.hidden = true;
        favoriteRegistered.hidden = false;
        animalSelect.hidden = true;
        animalConfirm.hidden = true;

        favoriteAnimalImage.src = image;
        favoriteAnimalImage.alt = name + "の写真";

        const affection = getAnimalAffection(name);
        updateAffection(affection);
    }

    function showAddAnimalPage() {
        mypageTitle.hidden = false;
        mypageForm.hidden = false;
        favoriteArea.hidden = false;
        favoriteTitle.hidden = false;
        favoriteTitle.textContent = "お気に入りの動物を追加";
        favoriteAdd.hidden = false;
        favoriteRegistered.hidden = true;
        animalSelect.hidden = true;
        animalConfirm.hidden = true;
    }

    function showAnimalSelect() {
        mypageTitle.hidden = true;
        mypageForm.hidden = true;
        favoriteArea.hidden = true;
        animalSelect.hidden = false;
        animalConfirm.hidden = true;
    }

    function returnToMypage() {
        const savedAnimalName = localStorage.getItem("favoriteAnimalName");
        const savedAnimalImage = localStorage.getItem("favoriteAnimalImage");

        if (savedAnimalName && savedAnimalImage) {
            showFavoriteAnimal(savedAnimalName, savedAnimalImage);
        } else {
            showAddAnimalPage();
        }
    }

    const savedName = localStorage.getItem("userName");
    const savedLanguage = localStorage.getItem("language");

    if (savedName !== null) {
        nameInput.value = savedName;
    }

    if (savedLanguage !== null) {
        languageSelect.value = savedLanguage;
    }

    nameInput.addEventListener("input", () => {
        localStorage.setItem("userName", nameInput.value);
    });

    languageSelect.addEventListener("change", () => {
        localStorage.setItem("language", languageSelect.value);
    });

    favoriteAdd.addEventListener("click", () => {
        showAnimalSelect();
    });

    animalChange.addEventListener("click", () => {
        showAnimalSelect();
    });

    animalBack.addEventListener("click", () => {
        returnToMypage();
    });

    animalCards.forEach(card => {
        card.addEventListener("click", () => {
            selectedAnimalName = card.dataset.name;
            selectedAnimalImage = card.dataset.image;

            confirmAnimalName.textContent = selectedAnimalName;
            animalConfirm.hidden = false;
        });
    });

    confirmNo.addEventListener("click", () => {
        animalConfirm.hidden = true;
        selectedAnimalName = "";
        selectedAnimalImage = "";
    });

    confirmYes.addEventListener("click", () => {
        localStorage.setItem("favoriteAnimalName", selectedAnimalName);
        localStorage.setItem("favoriteAnimalImage", selectedAnimalImage);

        const affectionKey = getAffectionKey(selectedAnimalName);

        if (localStorage.getItem(affectionKey) === null) {
            const initialValue = initialAffection[selectedAnimalName] ?? 0;
            localStorage.setItem(affectionKey, String(initialValue));
        }

        showFavoriteAnimal(selectedAnimalName, selectedAnimalImage);

        selectedAnimalName = "";
        selectedAnimalImage = "";
    });

    rewardOpen.addEventListener("click", () => {
        rewardModal.hidden = false;
    });

    rewardClose.addEventListener("click", () => {
        rewardModal.hidden = true;
    });

    rewardModal.addEventListener("click", event => {
        if (event.target === rewardModal) {
            rewardModal.hidden = true;
        }
    });

    const savedAnimalName = localStorage.getItem("favoriteAnimalName");
    const savedAnimalImage = localStorage.getItem("favoriteAnimalImage");

    if (savedAnimalName && savedAnimalImage) {
        showFavoriteAnimal(savedAnimalName, savedAnimalImage);
    } else {
        showAddAnimalPage();
    }
});
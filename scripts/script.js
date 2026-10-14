const searchInput = document.getElementById("skin-search");
const cards = document.querySelectorAll(".card");
const searchStatus = document.getElementById("search-status");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCards = 0;

    cards.forEach((card) => {
        const matches = card.id.toLowerCase().includes(query);
        card.hidden = !matches;
        visibleCards += Number(matches);
    });

    searchStatus.hidden = query.length === 0 || visibleCards > 0;
});

document.querySelectorAll(".modal-trigger").forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById(button.dataset.modal).showModal();
    });
});
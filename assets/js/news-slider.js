document.addEventListener("DOMContentLoaded", function() {
    const newsItems = document.querySelectorAll("#news-list li");
    let index = 0;
    function showNextItem() {
        newsItems.forEach((item, idx) => {
            item.style.display = idx === index ? "list-item" : "none";
        });
        index = (index + 1) % newsItems.length;
    }
    showNextItem();
    setInterval(showNextItem, 3000); // Switch news every 3 seconds
});

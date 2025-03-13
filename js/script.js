document.addEventListener("DOMContentLoaded", function () {
    const showGraphBtn = document.getElementById("show-graph-btn");
    const graphContainer = document.getElementById("graph-container");
    const video = document.getElementById("video");

    showGraphBtn.addEventListener("click", function () {
        if (video.src.includes("autoplay=1")) {
            graphContainer.style.display = "block";
            showGraphBtn.style.display = "none";
        } else {
            alert("עליך להפעיל את הסרטון לפני תחילת הניטור!");
        }
    });
});

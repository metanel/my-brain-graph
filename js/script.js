document.addEventListener("DOMContentLoaded", function () {
    const showGraphBtn = document.getElementById("show-graph-btn");
    const graphContainer = document.getElementById("graph-container");
    const videoFrame = document.getElementById("video-frame"); 

    showGraphBtn.addEventListener("click", function () {
        if (videoFrame) { // בודקים אם ה-iframe קיים
            graphContainer.style.display = "block";
            showGraphBtn.style.display = "none";
        } else {
            alert("עליך להפעיל את הסרטון לפני תחילת הניטור!");
        }
    });
});

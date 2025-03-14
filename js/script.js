document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js נטען בהצלחה!");

    const showGraphBtn = document.getElementById("show-graph-btn");
    console.log("🔍 הכפתור נמצא:", showGraphBtn);
    const graphContainer = document.getElementById("graph-container");
    const videoFrame = document.getElementById("video-frame");
    const modal = document.getElementById("graph-modal");
    const closeModal = document.querySelector(".close");

    showGraphBtn.addEventListener("click", function () {
    modal.style.display = "flex"; // מציג את ה-modal
});

    // סגירת ה-modal בלחיצה על כפתור ה-X
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // סגירת ה-modal בלחיצה מחוץ לחלון
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

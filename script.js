//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const progress = document.querySelector("#progress");

let currentStep = 1;

next.addEventListener("click", function () {
    if (currentStep < circles.length) {
        currentStep++;

        updateProgress();
    }
});

prev.addEventListener("click", function () {
    if (currentStep > 1) {
        currentStep--;

        updateProgress();
    }
});

function updateProgress() {

    // Activate circles up to current step
    circles.forEach(function (circle, index) {

        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

    });

    // Update progress line
    const progressWidth =
        ((currentStep - 1) / (circles.length - 1)) * 100;

    progress.style.width = progressWidth + "%";

    // Disable/enable buttons
    if (currentStep === 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if (currentStep === circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }
}
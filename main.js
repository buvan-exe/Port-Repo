// Enable GSAP scroll trigger
gsap.registerPlugin(ScrollTrigger);

// ======== SCROLL TRANSITION BETWEEN SCENES ==========
gsap.to("#entranceScene", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#scene-container",
        start: "top top",
        end: "50% top",
        scrub: true
    }
});

gsap.to("#roomScene", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#scene-container",
        start: "30% top",
        end: "80% top",
        scrub: true
    }
});

// ======== CAT CLICK TO OPEN MONITOR ==========
const roomScene = document.querySelector("#roomScene");

roomScene.addEventListener("click", (event) => {
    const hit = event.target;

    // Replace 'Cat' with exact object name in Spline
    if (hit && hit.name === "Cat") {
        document.getElementById("ui-screen").classList.remove("hidden");
    }
});

// ======== SECTION SWITCHING ==========
function openSection(id) {
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}


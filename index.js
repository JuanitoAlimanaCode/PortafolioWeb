document.addEventListener("DOMContentLoaded", () => {
    const btMostrar1 = document.getElementById("btMostrar1");
    const btOcultar1 = document.getElementById("btOcultar1");
    const detInfo1 = document.getElementById("detInfo1");

    const btMostrar2 = document.getElementById("btMostrar2");
    const btOcultar2 = document.getElementById("btOcultar2");
    const detInfo2 = document.getElementById("detInfo2");

    function setupToggle(btMostrar, btOcultar, detInfo) {
        btMostrar.addEventListener("click", () => {
            btMostrar.style.display = "none";
            btOcultar.style.display = "inline-block";
            detInfo.style.display = "block";
        });

        btOcultar.addEventListener("click", () => {
            btOcultar.style.display = "none";
            detInfo.style.display = "none";
            btMostrar.style.display = "inline-block";
        });
    }

    setupToggle(btMostrar1, btOcultar1, detInfo1);
    setupToggle(btMostrar2, btOcultar2, detInfo2);
});
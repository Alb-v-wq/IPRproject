(function (window) {

    const component = (element) => {
        if (!element) {
            return;
        }

        const btnChangeColor = element.querySelector("#changeColor");
        // const btnChangeColorById = element.getElementById("changeColor");
        const block1 = element.querySelector("#js1a");
        const circle = block1.querySelector(".s-exercises__circle");

        function changeColor() {
            circle.classList.remove("_theme_pink");
            circle.classList.add("_theme_blue");
            btnChangeColor.classList.add("_disabled");
        }

        btnChangeColor.addEventListener("click", changeColor)



    };

    const mount = () => {
        const elements = document.querySelectorAll('.s-exercises');
        elements.forEach(component);
    };

    document.addEventListener('DOMContentLoaded', mount);
})(window);

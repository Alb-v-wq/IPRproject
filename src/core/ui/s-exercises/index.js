(function (window) {

    const component = (element) => {
        if (!element) {
            return;
        }

        // js1a

        const btnChangeColor = element.querySelector("#changeColor");
        const block1 = element.querySelector("#js1a");
        const circle = block1.querySelector(".s-exercises__circle");

        function changeColor() {
            circle.classList.remove("_theme_pink");
            circle.classList.add("_theme_blue");
            btnChangeColor.classList.add("_disabled");
        }

        btnChangeColor.addEventListener("click", changeColor)

        // js1b

        const btnToggleColor = element.querySelector("#toggleColor");
        const block2 = element.querySelector("#js1b");
        const circle2 = block2.querySelector(".s-exercises__circle");

        function toggleColor() {
            if (circle2.classList.contains("_theme_pink")) {
                circle2.classList.remove("_theme_pink");
                circle2.classList.add("_theme_blue");
            } else {
                circle2.classList.remove("_theme_blue");
                circle2.classList.add("_theme_pink");
            }
        }

        btnToggleColor.addEventListener("click", toggleColor)

        // js2

        const btnDelete = element.querySelector("#deleteBtn");
        const block3 = element.querySelector("#js2");
        const circles = block3.querySelectorAll(".s-exercises__circle");

        function deleteCircles() {
            circles.forEach(circle => {
                circle.remove();
            });
        }

        btnDelete.addEventListener("click", deleteCircles)

        // js3
        
        const btnAddAttr = element.querySelector("#addAttr");
        const btnRemoveAttr = element.querySelector("#removeAttr");
        const block4 = element.querySelector("#js3");
        const circles1 = block4.querySelectorAll(".s-exercises__circle");

        btnAddAttr.addEventListener('click', () => {
            circles1.forEach(function(circle, index) {
                circle.setAttribute("data-active", "true");
                console.log(`Элемент ${index}:`, circle);
            });
        });

        btnRemoveAttr.addEventListener('click', () => {
            circles1.forEach(function(circle, index) {
                circle.removeAttribute("data-active");
                console.log(`Элемент ${index}:`, circle);
            });
        });

        // js4

        const btnChangeText = element.querySelector("#changeText");
        const block5 = element.querySelector("#js4");
        const circles2 = block5.querySelectorAll(".s-exercises__circle");

        function changeText() {
            circles2.forEach(circle => {
                circle.textContent = "Я изменен!";
            });
        }

        btnChangeText.addEventListener("click", changeText)

        // js5

        const btnHideCircles = element.querySelector("#hideCircles");
        const block6 = element.querySelector("#js5");
        const circles3 = block6.querySelectorAll(".s-exercises__circle");


        btnHideCircles.addEventListener('click', () => {
            circles3.forEach(circle => {
                circle.style.display = "none";
            });
        });

        // js6

        const btnCreateFromInput = element.querySelector("#createFromInput");
        const block7 = element.querySelector("#js6");
        const content = block7.querySelector(".s-exercises__content");
        const textInput = block7.querySelector(".s-exercises__input");

        btnCreateFromInput.addEventListener('click', () => {
            const newCircle = document.createElement("div");
            newCircle.className = "s-exercises__circle _theme_pink";
            newCircle.textContent = textInput.value;
            content.appendChild(newCircle);
        });

        // js7

        const block8 = element.querySelector("#js7");
        const btnShowAlertAndLog = block8.querySelector("#showAlertAndLog");

        btnShowAlertAndLog.addEventListener('click', () => {
            alert("Это alert!");
            console.log("Это alert!");
        });

        // js8

        const block9 = element.querySelector("#js8");
        const btnShowDelayedMessage = block9.querySelector("#showDelayedMessage");

        function changeText1() {
            const element = block9.querySelector(".s-exercises__circle");
        
            element.textContent = "Таймер сработал!";

            console.log("Прошло 3 секунды!");
        };

        btnShowDelayedMessage.addEventListener('click', () => {
            setTimeout(changeText1, 3000);
        });

        // js9

        const block10 = element.querySelector("#js9");
        const btnMoveCircle = block10.querySelector("#moveCircle");
        const rightBlock = block10.querySelector(".s-exercises__right");
        const leftBlock = block10.querySelector(".s-exercises__left");

            btnMoveCircle.addEventListener('click', () => {
                const element = leftBlock.querySelector(".s-exercises__circle");
                console.log(element);
                if (element) {
                    const removeElement = block10.querySelector(".s-exercises__circle");
                    rightBlock.appendChild(removeElement);
                } else {
                    const removeElement = block10.querySelector(".s-exercises__circle");
                    leftBlock.appendChild(removeElement);
                }

            });

        // js10

        const block11 = element.querySelector("#js10");
        const btnProcessArray = block11.querySelector("#processArray");

        btnProcessArray.addEventListener('click', () => {
            const digitals = [1, 2, 3, 4, 5];

            const incrementedDigitals = digitals.map(num => num + 1);

            const filterDigitals = incrementedDigitals.filter(num => num % 2 === 0);

            console.log(filterDigitals);
        });

        // js11

        const block12 = element.querySelector("#js11");
        const btnProcessString = block12.querySelector("#processString");

        btnProcessString.addEventListener('click', () => {
            const string = "javascript is fun";

            const stringToUpperCase = string.toUpperCase();

            const stringToSpaces= stringToUpperCase.replace(/ /g, "_");

            console.log(stringToSpaces);
        });

    };    
    const mount = () => {
        const elements = document.querySelectorAll('.s-exercises');
        elements.forEach(component);
    };

    document.addEventListener('DOMContentLoaded', mount);
})(window);

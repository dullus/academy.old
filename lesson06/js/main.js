const firstBox = document.getElementById("firstBox");
const secondBox = document.getElementById("secondBox");
const thirdBox = document.getElementById("thirdBox");
const fourthBox = document.getElementById("fourthBox");
const fifthBox = document.getElementById("fifthBox");
const sixthBox = document.getElementById("sixthBox")
const wrapper = document.getElementById("wrapper");

function randomColor(box) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    box.style.background = bgColor;
}

function randomAll() {
    randomColor(firstBox);
    randomColor(secondBox);
    randomColor(thirdBox);
    randomColor(fourthBox);
    randomColor(fifthBox);
    randomColor(sixthBox);
}

function getPosition(box) {
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = box.getBoundingClientRect();
    return {
        top: elemRect.top - bodyRect.top,
        left: elemRect.left - bodyRect.left
    };
};

function increaseSpeed() {
    if (speed < 10) {
        speed++;
    }
};

function decreaseSpeed() {
    if (speed > 0) {
        speed--;
    }
};

function stopMove() {
    speed = 0;
};

function startMove() {
    speed = 1;
};

let boxWrapperWidth = wrapper.offsetWidth;
let boxWrapperHeight = wrapper.offsetHeight;
let direction = true;
let position;
let speed = 0;
let box;
function move(box) {
    position = getPosition(box).left + 8;
    if (direction) {
        position += speed;
    }
    else position -= speed;
    box.style.left = `${position}px`;

    if (position >= boxWrapperWidth - 35 && direction) {
        direction = false;
    }
    else if (position <= 8 && !direction) {
        direction = true;
    }
    requestAnimationFrame(() => move(box));
}

let sizing = 1;
let bigger = true;
let size = 40;

function enlarge(box) {
    if (bigger) {
        sizing = 1;
    }
    else sizing = -1;
    size += sizing;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    requestAnimationFrame(() => enlarge(box));
    if (size == boxWrapperHeight && bigger) {
        bigger = false;
    }
    else if (size == 10 && !bigger) {
        bigger = true;
    }
};

move(firstBox);
enlarge(secondBox);

let positionThirdTop = getPosition(thirdBox).top;
let positionThirdLeft = getPosition(thirdBox).left;

function moveLeft() {
    if (positionThirdLeft - 3 >= 11) {
        positionThirdLeft -= 3;
        thirdBox.style.left = `${positionThirdLeft}px`;
    }
};

function moveRight() {
    if (positionThirdLeft + 3 <= boxWrapperWidth) {
        positionThirdLeft += 3;
        thirdBox.style.left = `${positionThirdLeft}px`;
    }
};

function moveDown() {
    if (positionThirdTop + 3 <= 556) {
        positionThirdTop += 3;
        thirdBox.style.top = `${positionThirdTop}px`;
    }
};

function moveUp() {
    if (positionThirdTop - 3 >= 406) {
        positionThirdTop -= 3;
        thirdBox.style.top = `${positionThirdTop}px`;
    }
};

window.addEventListener("keydown", (event) => {
    if (event.key == "ArrowDown") {
        moveDown();
    }
    else if (event.key == "ArrowLeft") {
        moveLeft();
    }
    else if (event.key == "ArrowRight") {
        moveRight();
    }
    else if (event.key == "ArrowUp") {
        moveUp();
    }
});

let positionFourth = getPosition(fourthBox).left;

function moveFourth() {
    for (let i = 1; i < boxWrapperWidth - 35; i++) {
        setTimeout(function () {
            if (positionFourth <= boxWrapperWidth - 35) {
                positionFourth += (i / i);
                fourthBox.style.left = `${positionFourth}px`;
            }
        }, i * 10);
    };
};

moveFourth();

let sizeSixth = 40;
function enlargeSixth() {
    for (let i = 1; i < boxWrapperHeight; i++) {
        setTimeout(function () {
            if (sizeSixth <= boxWrapperHeight - 5) {
                sizeSixth += (i / i);
                sixthBox.style.width = `${sizeSixth}px`;
                sixthBox.style.height = `${sizeSixth}px`;
            }
        }, i * 10);
    };
}

enlargeSixth();

let widthFifth = 40;
let heightFifth = 40;
let leftFifth = getPosition(fifthBox).left + 8;
let topFifth = getPosition(fifthBox).top + 8;
let fifthLeft = true;
let fifthTop = true;
let fifthSizingWidth = true;
let fifthSizingHeight = true;

function moveRandomEnlargeRandom() {
    if (widthFifth == 100) {
        fifthSizingWidth = false;
    }
    else if (widthFifth == 40) fifthSizingWidth = true;

    if (heightFifth == 100) {
        fifthSizingHeight = false;
    }
    else if (heightFifth == 40) fifthSizingHeight = true;

    if (leftFifth + widthFifth == boxWrapperWidth) {
        fifthLeft = false;
    }
    else if (leftFifth == 8) fifthLeft = true;

    if (topFifth + heightFifth >= boxWrapperHeight * 6) {
        fifthTop = false;
    }
    else if (topFifth <= boxWrapperHeight * 5) fifthTop = true;

    if (fifthSizingWidth) {
        widthFifth += 1;
    }
    else widthFifth -= 1;

    if (fifthSizingHeight) {
        heightFifth += 1;
    }
    else heightFifth -= 1;

    if (fifthLeft) {
        leftFifth += 1;
    }
    else leftFifth -= 1;

    if (fifthTop) {
        topFifth += 1;
    }
    else topFifth -= 1;

    fifthBox.style.width = `${widthFifth}px`;
    fifthBox.style.height = `${heightFifth}px`;
    fifthBox.style.left = `${leftFifth}px`;
    fifthBox.style.top = `${topFifth}px`;
    requestAnimationFrame(moveRandomEnlargeRandom);
}

moveRandomEnlargeRandom();
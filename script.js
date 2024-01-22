const InactiveTime = 50; // В секундах

var scroller_1 = document.querySelector(".scroller_1");
var infoScrollWrapper = document.querySelector(".infoScrollWrapper");
var scrollers = [scroller_1];

var infocentr = document.querySelector(".infocentr");
var infoBlock = document.querySelector(".infoBlock");
var buttons = document.querySelectorAll(".button");
var infoImage = document.getElementById("infoImg");
// var startBlock = document.querySelector(".startBlock");

var inactive = false;
var state = 0;

var activeColor = "rgba(255, 255, 255, 0.5)";
var inactiveColor = "#FFFFFF";
var boderColor = "inset 0px 0px 0px 5px #D5F000";

var prevButton = 0;

var timeLeftTimer;


function deselectButton(id) {
    buttons[id].style.backgroundColor = inactiveColor;
    buttons[id].style.boxShadow = '';
}


function setCurrentButton(id) {
    deselectButton(prevButton);

    infoScrollWrapper.scrollTop = 0;
    infoBlock.style.backgroundImage = `url("./images/background${id + 1}.png")`
    infoImage.src = `./images/info${id + 1}.png`;

    buttons[id].style.backgroundColor = activeColor;
    buttons[id].style.boxShadow = boderColor;

    prevButton = id;
}


function showStart() {
    // startBlock.style.visibility = "visible";
    // infocentr.style.visibility = "hidden";
    scrollers.forEach((scroller) => {
        setInit(scroller);
    });
    clearTimeout(timeLeftTimer);
}


function hideStart() {
    scrollers.forEach((scroller) => {
        setInit(scroller);
    });


    infocentr.style.visibility = "visible";
    // startBlock.style.visibility = "hidden";

    clearTimeout(timeLeftTimer);
    timeLeftTimer = setTimeout(function () {
        showStart();
    }, InactiveTime * 1000);
}


function scrollToButton(buttonId) {
    scroller_1.scrollTo({
        top: buttonId * 150,
        left: 0,
        behavior: "smooth",
    });
}


function updateSort(id, el) {
    // var scrollHeight = el.scrollHeight;
    var scrollTop = el.scrollTop;
    // var height = el.offsetHeight;
    // var items = el.children;

    // console.log(scrollTop);

    clearTimeout(timeLeftTimer);
    timeLeftTimer = setTimeout(function () {
        showStart();
    }, InactiveTime * 1000);

    var buttonId;

    if (scrollTop >= 0 && scrollTop <= 75) {
        buttonId = 0
    }
    else if (scrollTop > 75 && scrollTop <= 225) {
        buttonId = 1
    }
    else if (scrollTop > 225 && scrollTop <= 375) {
        buttonId = 2
    }
    else if (scrollTop > 375 && scrollTop <= 525) {
        buttonId = 3
    }
    else if (scrollTop > 525 && scrollTop <= 675) {
        buttonId = 4
    }
    else if (scrollTop > 675 && scrollTop <= 825) {
        buttonId = 5
    }
    else if (scrollTop > 825 && scrollTop <= 975) {
        buttonId = 6
    }
    else if (scrollTop > 975 && scrollTop <= 1125) {
        buttonId = 7
    }
    else if (scrollTop > 1125 && scrollTop <= 1275) {
        buttonId = 8
    }
    else if (scrollTop > 1275 && scrollTop <= 1425) {
        buttonId = 9
    }
    else if (scrollTop > 1425 && scrollTop <= 1575) {
        buttonId = 10
    }
    else if (scrollTop > 1575 && scrollTop <= 1725) {
        buttonId = 11
    }
    else if (scrollTop > 1725 && scrollTop <= 1875) {
        buttonId = 12
    }
    else if (scrollTop > 1875 && scrollTop <= 2025) {
        buttonId = 13
    }
    else if (scrollTop > 2025 && scrollTop <= 2175) {
        buttonId = 14
    }
    else if (scrollTop > 2175 && scrollTop <= 2325) {
        buttonId = 15
    }
    else if (scrollTop > 2325 && scrollTop <= 2475) {
        buttonId = 16
    }
    else if (scrollTop > 2475 && scrollTop <= 2625) {
        buttonId = 17
    }
    else if (scrollTop > 2625 && scrollTop <= 2775) {
        buttonId = 18
    }
    else if (scrollTop > 2775 && scrollTop <= 2925) {
        buttonId = 19
    }
    else if (scrollTop > 2925) {
        buttonId = 20
    }
    else {
        buttonId = -1
    }

    if (buttonId != -1) {
        setCurrentButton(buttonId);
    }
}

function setInit(el) {
    el.scrollTop = 0;
    setCurrentButton(0);
}

var scrollerId = -1;

infocentr.style.visibility = "visible";

scrollers.forEach((scroller) => {
    var lastscroll;
    scrollerId = scrollerId + 1
    let scrollId = scrollerId;

    scroller.addEventListener("scroll", function () {
        var el = this;
        var id = scrollId;

        if (lastscroll) {
            clearTimeout(lastscroll);
        }
        lastscroll = setTimeout(function () {
            updateSort(id, el);
        }, 200);
    });


    setInit(scroller);
});

infoScrollWrapper.addEventListener("scroll", function () {
    clearTimeout(timeLeftTimer);
    timeLeftTimer = setTimeout(function () {
        showStart();
    }, InactiveTime * 1000);
});
const mainColor = getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('--main-color');
const headerColor = getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('--header-color');
const textColor = getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('--text-color');
const backgroundColor = getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('--background-color');
const gridBackgroundColor = getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue('--grid-background-color');
window.onload = function() {
    
    // const talents = document.getElementsByClassName("interactive");
    const interactive = document.getElementsByClassName("interactive");
    handDisplayCorrectItem(interactive);
    first = document.getElementsByName("first");
    for(let i = 0; i < first.length; i++) {
        // console.log(first[i].id)
        first[i].click()
    }

    let test = document.getElementsByTagName("html")[0];
    console.log(test.offsetWidth);


    
    // let btn = document.getElementById("button");
    // let div = document.getElementById("mydiv");
    let pressable = document.getElementsByClassName("pressable");
    makePressable(pressable);

    let navbarElements = document.getElementsByName("navbar-mobile-button")
    navbarMobileCloseOnPress(navbarElements);
    // let h2divs = document.getElementsByTagName("h2");
    // for(let i = 0; i < h2divs.length; i++){
    //     h2divs[i].click();
    // }
}

function displayCorrectItem() {
    this.addEventListener("contextmenu", (event) => event.preventDefault());
    let idName = this.id;
    const idNum = idName.slice(-1);
    const classNames = document.getElementsByClassName(idName.substring(0, idName.length - 1));
    const classItems = document.getElementsByClassName(idName.substring(0, idName.length - 5)+"item");

    for(let i = 0; i < classNames.length; i++) {
        if(i != idNum){
            classNames[i].classList.add("hover-brighten");
            classNames[i].style.backgroundColor = gridBackgroundColor;
            classItems[i].style.display = "none";
        }
        else {
            classNames[i].classList.remove("hover-brighten");
            let mainColor = getComputedStyle(classNames[i]).getPropertyValue('--main-color');
            classNames[i].style.backgroundColor = mainColor;
            classItems[i].style.display = "block";
        }
    }
}

function handDisplayCorrectItem(thisClass) {
    for(let i = 0; i < thisClass.length; i++) {
        thisClass[i].addEventListener("click", displayCorrectItem);
    }
    // thisClass[0].click();
}

function makePressable(pressable) {
    for(let i = 0; i < pressable.length; i++) {
        let btn = pressable[i];
        let div = document.getElementById(btn.id+"-child")
        let rt = document.getElementById(btn.id+"-rotating")
        btn.addEventListener('click', () => {
            console.log(btn)
            if(div.style.display === "none") {
                btn.classList.remove("rounded-bottom");
                btn.classList.add("rounded-bottom-reverse");

                div.classList.add("appear");
                div.style.display = "block";
                rt.style.animationName = "rotate-clockwise-90";

                setTimeout(function() {
                    // div.style.opacity = "1";
                    div.classList.remove("appear");

                }, 400);
            }
            else {
                btn.classList.remove("rounded-bottom-reverse")
                btn.classList.add("rounded-bottom");

                div.classList.add("disappear");
                rt.style.animationName = "rotate-counter-clockwise-90";
                setTimeout(function() {
                    // div.style.opacity = "0";
                    div.style.display = "none";
                    div.classList.remove("disappear")
                    btn.classList.remove("rounded-bottom")
                }, 400)
            }
        })
    }
}

function navbarMobileCloseOnPress(navbarElements) {
    let header = document.getElementById("navbar-mobile-description")
    for(let i = 0; i < navbarElements.length; i++) {
        let btn = navbarElements[i];
        btn.addEventListener('click', () => {
            header.click();
        })
    }
}
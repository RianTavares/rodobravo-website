const body = document.getElementsByTagName('body');


document.getElementById("menu-slide").addEventListener("click", overFlowBody());

const overFlowBody = () => {
    let checkedOrNot  = document.getElementById("menu-slide").checked;
    if (checkedOrNot) {
        body.style.overflow = 'hidden';
    }
}


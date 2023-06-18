let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {

    let scrollTop = window.scrollY
    let domHeight = document.body.clientHeight
    let innerHeight = window.innerHeight
    let scrollHeight = scrollTop / (domHeight - innerHeight)
    let calucateScroller = Math.round(scrollHeight * 100)
    scroller.style.width = calucateScroller + "%"

})


let addNumber
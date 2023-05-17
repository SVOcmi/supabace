document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('body').onclick = function () {
        document.querySelector('#header__el-developers').classList.remove('item-spisok__elements-active')
        document.querySelector('#header__el-product').classList.remove('item-spisok__elements-active')
    }

    switcher();
});

function openHeaderMenuProduct() {
    document.querySelector('#header__el-developers').classList.remove('item-spisok__elements-active')
    let idList = document.querySelector('#header__el-product');
    let arrow = document.querySelector('.item-product .header-menu__arrow .arrow-down');
    idList.classList.toggle('item-spisok__elements-active')
    arrow.classList.toggle('rotate')
    event.stopPropagation();
}

function openHeaderMenuDevelopers() {
    document.querySelector('#header__el-product').classList.remove('item-spisok__elements-active')
    let idList = document.querySelector('#header__el-developers');
    let arrow = document.querySelector('.item-developers .header-menu__arrow .arrow-down');
    idList.classList.toggle('item-spisok__elements-active')
    arrow.classList.toggle('rotate')
    event.stopPropagation();
}

function switcher() {
    [].forEach.call(document.body.querySelectorAll("[data-switcher]"), (a) => {
        let b = a.querySelectorAll("[data-switcher-name]"),
            c = a.querySelectorAll("[data-switcher-show]");
        [].forEach.call(c, (d) => {
            if (d.dataset.switcherSelected != undefined) {
                d.classList.add("selected");
                [].filter.call(b, (a) => a.dataset.switcherName == d.dataset.switcherShow ? a.classList.add("selected") : "");
            }
            d.addEventListener("click", () => {
                [].forEach.call(c, (a) => a != d ? a.classList.remove("selected") : a.classList.add("selected"));
                [].forEach.call(b, (a) => a.dataset.switcherName != d.dataset.switcherShow ? a.classList.remove("selected") : a.classList.add("selected"));
            }, true);
        });
    });
}

function openBurgMenu() {
    let btnBurgMenu = document.querySelector('.btn-burg-menu')
    let menuMobile = document.querySelector('.burger-menu')
    menuMobile.classList.add('burg-menu-open')
}

function closeBurgMenu() {
    let btnBurgMenu = document.querySelector('.btn-burg-menu')
    let menuMobile = document.querySelector('.burger-menu')
    menuMobile.classList.remove('burg-menu-open')
}
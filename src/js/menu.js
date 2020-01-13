
function initMenu() {
    const $menu = $('.main');
    const $submenu = $('.sub');

    $('.header__menu').on('click', () => {
        $menu.toggleClass('active');
    });

    $('.header__submenu').on('click', () => {
        $submenu.toggleClass('active');
    });

    $('.menu__quit').on('click', () => {
        $menu.removeClass('active');
        $submenu.removeClass('active');
    });

    $('.menu').on('click', () => {
        $menu.removeClass('active');
        $submenu.removeClass('active');
    });
}

module.exports.initMenu = initMenu;
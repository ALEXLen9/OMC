
function closeAllMenus() {
    const $menus = $('.menu');

    $menus.removeClass('active');
    $('body').removeClass('hidded');
}

function initMenu() {
    const $menus = $('.menu');
    const $openBtns = $('.open-menu-btn');
    const $closeBtns = $('.close-menu-btn');

    $menus.on('click', (event) => {
        if(event.target.matches('.menu'))
        {
            closeAllMenus();
        }
    });

    $openBtns.on('click', (event) => {
        const btn = event.target.closest('[data-menu-id]');
        const menuId = btn.getAttribute('data-menu-id');

        closeAllMenus();
        $('#' + menuId).addClass('active');

        $('body').addClass('hidded');
    });

    $closeBtns.on('click', () => {
       closeAllMenus();
    });
}

module.exports.initMenu = initMenu;
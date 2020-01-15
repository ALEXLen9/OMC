


function initMaket() {
    const $grid = $(".icon-grid");
    const $list = $(".icon-list");

    $grid.on('click', (event) => {
            $('.upload__file').addClass('active');
            $('.upload__list').removeClass('active');
    });

    $list.on('click', (event) => {
            $('.upload__list').addClass('active');
            $('.upload__file').removeClass('active');
    });
}



module.exports.initMaket = initMaket;
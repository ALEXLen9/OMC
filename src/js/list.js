
function initList () {
    const $list = $('.list');

    $list.on('click', '.list__delete', (event) => {
        const { target } = event;
        const listItem = target.closest('.list__item');

        listItem.remove();
    }); //тут дилигоровоніє!
}

module.exports.initList = initList;

$(document).ready(function () {
    var $galleryBlock = $('.works__gallery--block');
    var $infoBlock = $('#big');

    $galleryBlock.not('#big').on('click', function () {
        var dataId = $(this).attr('data-id');
        $infoBlock.attr('data-id', dataId);
        $infoBlock.fadeOut(0);
        $infoBlock.fadeIn(600);
    });
});

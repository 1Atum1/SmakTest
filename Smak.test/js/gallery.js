/**
 * Created by Atum on 05.12.2016.
 */


$(document).ready(function () {
    var $galleryBlock = $('.works__gallery--block');
    var $infoBlock = $('.works__main_info--left');

    $galleryBlock.on('click', function () {
        $infoBlock.append("<div class='works__gallery--block' data-id='2'></div>");
    });
});
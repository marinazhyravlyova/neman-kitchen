
$(function() {
    var page = 2;
    $('#show').click(function() {
        $.ajax({
            url : 'files.php?page='+page,
            type : 'GET',
            success: function(d){
                if(!!d) {
                    $('#content').append(d);
                    page++
                }
            }
        })
    })
});

$(function() {
    var page = 2;
    $('#show-kitchens').click(function() {
        $.ajax({
            url : 'files-kitchens.php?page='+page,
            type : 'GET',
            success: function(d){
                if(!!d) {
                    $('#content').append(d);
                    page++
                }
            }
        })
    })
});
jQuery(function($){
   $("#phone-one").mask("+375 (99) 999-99-99");
   $("#phone").mask("+375 (99) 999-99-99");
});

$(document).ready(function () {
    $("form").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var message = $(formNm).find(".msgs");
        var formTitle = $(formNm).find(".formTitle");
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
              message.html(data);
              formTitle.css("display","none");
              setTimeout(function(){
                $('.formTitle').css("display","block");
                $('.msgs').html('');
                $('#phone').not(':input[type=hidden]').val('');
              }, 3000);
            },
            error: function (jqXHR, text, error) {
                message.html(error);
                formTitle.css("display","none");
                setTimeout(function(){
                  $('.formTitle').css("display","block");
                  $('.msgs').html('');
                  $('input').not(':input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });
      var $input = $('.form-fieldset > input');
      $input.blur(function (e) {
        $(this).toggleClass('filled', !!$(this).val());
      });
});

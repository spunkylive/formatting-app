// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
    if(notifyMessage) {
        if(notifyLevel == "ERROR") {
            var style = { background: '#da1010', color: '#ffffff' };
            var caption = "Error";
        }
        else if(notifyLevel == "INFO") {
            var style = { background: '#fa6800', color: '#ffffff' };
            var caption = "Info";
        }
        else{
            var style = { background: '#145814', color: '#ffffff' };
            var caption = "Success";
        }
        $.Notify({
            caption: caption,
            content: notifyMessage,
            style: style,
            timeout: 5000
        });
    }


    $("#app_title").keyup(function(event) {
        changeHeading(event.target.value);
    });


    $(".para_text").keyup(function(event) {
        var maxLength = 500;
        if (event.target.value.length > maxLength) {
            show_error('Welcome text limit is '+ maxLength +' characters', 'ERROR');
            event.target.value = event.target.value.substring(0, maxLength);
        }
        changeParaText(event.target.value);
    });


    $('#font').on('change', function(event) {
        changeFont(event.target.value);
    });
});


function show_error(notifyMessage, notifyLevel){
    if(notifyMessage) {
        if(notifyLevel == "ERROR") {
            var style = {background: '#da1010', color: '#ffffff'};
            var caption = "Error";
        }
        else if(notifyLevel == "INFO") {
            var style = {background: '#fa6800', color: '#ffffff'};
            var caption = "Info";
        }
        else{
            var style = {background: '#145814', color: '#ffffff'};
            var caption = "Success";
        }
        $.Notify({
            caption: caption,
            content: notifyMessage,
            style: style,
            timeout: 5000
        });
    }
}


function changeHeading(text) {
    $('.header-text').text(text);
    $('title').text(text);
};


function changeParaText(text) {
    $('.para').text(text);
};


function changeFont(font) {
    $('body').css("font-family", font);
};

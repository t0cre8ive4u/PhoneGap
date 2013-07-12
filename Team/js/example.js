var $el, $tempDiv, $tempButton, divHeight = 0;

$.fn.middleBoxButton = function(text, url) {
    
    return this.hover(function(e) {
    
        $el = $(this).css("border-color", "white");
        divHeight = $el.height() + parseInt($el.css("padding-top")) + parseInt($el.css("padding-bottom"));
                
        $tempDiv = $("<div />", {
            "class": "overlay rounded"
        });
                
        $tempButton = $("<a />", {
            "href": url,
            "text": text,
            "class": "widget-button rounded",
            "css": {
                "top": (divHeight / 2) - 7 + "px"
            }
        }).appendTo($tempDiv);
                
        $tempDiv.appendTo($el);
        
    }, function(e) {
    
        $el = $(this).css("border-color", "#999");
    
        $(".overlay").fadeOut("fast", function() {
            $(this).remove();
        })
    
    });
    
}

$(function() {
    
    $(".widget-one").middleBoxButton("Derek Stiles", "#read");
    $(".widget-two").middleBoxButton("Nicholas Wainer", "http://www.linkedin.com/pub/nicholas-wainer/3b/8ab/3ab");
    $(".widget-three").middleBoxButton("Tommy Sledzik", "#more");


});
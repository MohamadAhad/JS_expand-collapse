$(document).ready(function(){
    $('a').click(function(event){
        event.preventDefault();//prevents the default actionf of the link
        const clickLink = $(this);
        const toggle = clickLink.prev('div');
        toggle.toggleClass('hide');//add or remove the hide class from previous div element
        if (toggle.hasClass('hide')){
            clickLink.text('show more');
        } else{
            clickLink.text('show less');
        }
    });
});
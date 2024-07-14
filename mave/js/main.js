$(function(){

    $('.btn_list li').on('mouseover',function(){

        var i = $(this).index();
        
        $('.btn_list li').removeClass('on');
        $(this).addClass('on');

        //

        $('.title li').removeClass('on');
        $('.title li').eq(i).addClass('on');

        //

        $('.pic p').removeClass('on');
        $('.pic p').eq(i).addClass('on');


    });//click

});//doc


$(function(){

    $('.btn_list_1 li').on('mouseover',function(){

        var i = $(this).index();
        
        $('.btn_list li').removeClass('on');
        $(this).addClass('on');

        //

        $('.title li').removeClass('on');
        $('.title li').eq(i).addClass('on');

        //

        $('.pic p').removeClass('on');
        $('.pic p').eq(i).addClass('on');


    });//click

});//doc

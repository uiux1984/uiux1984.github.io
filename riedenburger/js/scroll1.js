$(function(){

 

    // 네비 버튼을 클릭했을때 해당 박스 위치로 스크롤
    $('#navi>li').on('click',function(){

            var i =$(this).index();
            var target = $('#wrap>div').eq(i).offset().top;

            $('#navi>li').removeClass('on');
            $('#navi>li').eq(i).addClass('on');

            $('html,body').stop().animate({
                'scrollTop':target

            },1000)


    }); //click

    // 브라우저를 스크롤시 활성화 이벤트

    var pos1, pos2, pos3,pos4;

    pos1 = $('#wrap>div').eq(0).offset().top;
    pos2 = $('#wrap>div').eq(1).offset().top;
    pos3 = $('#wrap>div').eq(2).offset().top;
    pos4 = $('#wrap>div').eq(3).offset().top;

    var baseline = 100;


    $(window).on('scroll',function(){

        var scroll = $(this).scrollTop();

        $('h1').text(scroll);


        $('#wrap>div').removeClass('on');
        $('#navi>li').removeClass('on');

        if(scroll>=pos1 && scroll<pos2-baseline){

            $('#wrap>div').eq(0).addClass('on');
            $('#navi>li').eq(0).addClass('on');
        }

        if(scroll>=pos2-baseline && scroll<pos3-baseline){

            $('#wrap>div').eq(1).addClass('on');
            $('#navi>li').eq(1).addClass('on');

        }

        if(scroll>=pos3-baseline && scroll<pos4-baseline){

            $('#wrap>div').eq(2).addClass('on');
            $('#navi>li').eq(2).addClass('on');

        }

        if(scroll>=pos4-baseline){
            $('#wrap>div').eq(3).addClass('on');
            $('#navi>li').eq(3).addClass('on');
        }




    });






});
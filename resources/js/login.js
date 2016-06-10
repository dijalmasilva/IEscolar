/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var posicaoScroll = 0;
    valorIconDown = -10;

    $(window).scroll(function () {
        posicaoScroll = $(this).scrollTop();
        console.log(posicaoScroll);

//        Função para rolagem do header
        if (posicaoScroll === 0) {
            $('.header_login').animate({
                height: '170px'
            }, 0);
            $('#icon_iescolar').css({
                marginTop: '50px'
            });
        } else if (posicaoScroll < 90) {
            var tamanho = 170 - posicaoScroll;
            var marginIcon = 50 - (posicaoScroll / 1.8);
            $('.header_login').animate({
                height: tamanho + 'px'
            }, 0);
            $('#icon_iescolar').animate({
                marginTop: marginIcon + 'px'
            }, 0);
        } else {
            var marginIcon = 50 - (89 / 1.8);
            $('.header_login').animate({
                height: '81px'
            }, 0);
            $('#icon_iescolar').animate({
                marginTop: marginIcon + 'px'
            }, 0);
        }

        //botaoTopo
        if (posicaoScroll > 150){
            $('#descer').addClass('invisible');
            $('#descer').removeClass('animated fadeInUp');
            $('#voltarAoTopo').removeClass('invisible');
            $('#voltarAoTopo').addClass('animated fadeInUp');
        }

        //botaoDown
        if (posicaoScroll < 100){
            $('#voltarAoTopo').addClass('invisible');
            $('#voltarAoTopo').removeClass('animated fadeInUp');
            $('#descer').removeClass('invisible');
            $('#descer').addClass('animated fadeInUp');
        }

        //efeito do iescolar
        if (posicaoScroll > 150) {
            $('#iescolar').addClass('animated rotateInDownLeft');
        }

//        efeito das funções 
        if (posicaoScroll > 490) {
            $('.effect').addClass('animated bounceInUp');
        }

        //efeito redes sociais
        if (posicaoScroll > 1100) {
            $('.row_custom').addClass('animated zoomIn');
        }

        //efeito coruja rodapé
        if (posicaoScroll > 1600) {
            $('.icon-footer').addClass('animated slideInLeft');
        }

    });
    
    $('.modal_conteudo').one(animationend, function (){
       $(this).removeClass('animated zoomInUp');
    });
    
    $('#x').click(function (){
        fecharModalLogin();   
    });

    $('body').keyup(function(event) {
        /* Act on the event */
        if (event.which == 27){
            fecharModalLogin();
        }
    });

    $('#voltarAoTopo').click(function(event) {
        /* Act on the event */
        $('html, body').animate({
            scrollTop: '0'},
            1000, function() {
            /* stuff to do after animation is complete */
        });
    });

    $('#descer').click(function(event) {
        /* Act on the event */
        $('html, body').animate({
            scrollTop: '677'},
            700, function() {
            /* stuff to do after animation is complete */
        });
    });
});

function abrirModalLogin(){
    $('.modal_dark').removeClass('invisible');
    $('.modal_start').removeClass('invisible');
    $('.modal_conteudo').addClass('animated zoomInUp');
}

function fecharModalLogin(){
    $('.modal_dark').addClass('invisible') ;
    $('.modal_start').addClass('invisible');
}
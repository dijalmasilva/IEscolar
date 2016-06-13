/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var posicaoScroll = 0;
    valorIconDown = -10;
    widthTela = $(window).width();
    console.log(widthTela);

    $(window).scroll(function () {
        posicaoScroll = $(this).scrollTop();

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

        //verifica se o dispositivo é maior que um tablet
        if (widthTela > 768){
            //efeito do iescolar
            if (posicaoScroll > 150) {
                $('#iescolar').addClass('animated rotateInDownLeft');
            }

            //efeito das funções 
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
        //verifica se é um tablet
        }else if (widthTela > 425){
             //efeito do iescolar
            if (posicaoScroll > 120) {
                $('#iescolar').addClass('animated rotateInDownLeft');
            }

            //efeito das funções 
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
        }

        //faz a troca entre os botões de rolagem

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

    });
    
    //Verifica se o efeito do modal login finalizou
    $('.modal_conteudo').one(animationend, function (){
        //remove os efeitos
       $(this).removeClass('animated zoomInUp');
    });
    
    //fecha o modal de login clicando no x
    $('#x').click(function (){
        fecharModalLogin();   
    });
    
    //fecha o modal de login apertando a tecla ESC
    $('body').keyup(function(event) {
        //Compara se a tecla apertada é igual ao código de ESC
        if (event.which == 27){
            fecharModalLogin();
        }
    });

    //Função para rolar a página até o topo
    $('#voltarAoTopo').click(function(event) {
        //Faz a função de rolagem em 1 segundo
        $('html, body').animate({
            scrollTop: '0'},
            1000, function() {
            /* stuff to do after animation is complete */
        });
    });

    //Função para rolar a página até o ponto especificado
    $('#descer').click(function(event) {

        if (widthTela > 768){

            //Faz a função de rolagem em 1 segundo
            $('html, body').animate({
                scrollTop: '677'},
                1000, function() {
                /* stuff to do after animation is complete */
            });
        }else if (widthTela > 425){
            
            //Faz a função de rolagem em 1 segundo
            $('html, body').animate({
                scrollTop: '497'},
                1000, function() {
                /* stuff to do after animation is complete */
            });
        }

    });        
});

//função para exibir o modal de login
function abrirModalLogin(){
    $('.modal_dark').removeClass('invisible');
    $('.modal_start').removeClass('invisible');
    $('.modal_conteudo').addClass('animated zoomInUp');
}
//função  para fechar o modal de login
function fecharModalLogin(){
    $('.modal_dark').addClass('invisible') ;
    $('.modal_start').addClass('invisible');
}
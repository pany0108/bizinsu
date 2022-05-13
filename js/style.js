$(function(){
  // 모달 외부 클릭 시 닫힘
  $(window).on('click',function(e){
    if (e.target.id === 'modal1' && e.target.className === 'dimmer') {
      $('#modal1').css({opacity: 0, zIndex:-1});
      $('body').removeClass('modal-open');
    }
    if (e.target.id === 'modal2' && e.target.className === 'dimmer') {
      $('#modal1').css({opacity: 0, zIndex:-1});
      $('body').removeClass('modal-open');
    }
    if (e.target.id === 'modal3' && e.target.className === 'dimmer') {
      $('#modal1').css({opacity: 0, zIndex:-1});
      $('body').removeClass('modal-open');
    }
  });
  // 모달 외부 클릭 시 닫힘 end

  // 비교견적 요청 모달
  $('#submitButton1').on('click', function () {
    $('#modal1').css({ opacity: 1, zIndex: 1 });
    $('body').addClass('modal-open');
  });

  $('.ModalCloseButton').on('click', function () {
    $(this).parents('.dimmer').css({ opacity: 0, zIndex: -1 });
    $('body').removeClass('modal-open');
  });
  // 비교견적 요청 모달 end

  // 상품자료 요청 모달
  $('#submitButton2').on('click', function () {
    $('#modal2').css({ opacity: 1, zIndex: 1 });
    $('body').addClass('modal-open');
  });

  $('.ModalCloseButton').on('click', function () {
    $(this).parents('.dimmer').css({ opacity: 0, zIndex: -1 });
    $('body').removeClass('modal-open');
  });
  // 상품자료 요청 모달 end

  // checkbox 선택 제한 '2'
  $(".chck_box").change(function() {
    var cnt = 2;

    if( cnt == $(".chck_box:checked").length ) {
        $(".chck_box:not(:checked)").attr("disabled", "disabled");
    } else {
        $(".chck_box").removeAttr("disabled");
    }
  });
  // checkbox 선택 제한 '2' end

  // Top 버튼
  $('.btn.top').hide();
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.btn.top').fadeIn();
    } else {
      $('.btn.top').fadeOut();
    }
  });

  $('.btn.top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      400,
    );
    return false;
  });
  // Top 버튼 end
});

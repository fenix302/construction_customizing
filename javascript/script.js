jQuery(document).ready(function(){
    // .navi 의 li 태그에 mouseover 이벤트 설정
    $('.navi > li').mouseover(function(){
        // $(this) : 현재 선택된 태그(요소)
        // find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는
        // 태그를 찾아서 반환함. 만약에, children()를 사용할 경우 직계 자식
        // 태그를 반환함
        // stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함
        // slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로
        // 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의
        // height값을 낮추거나 높혀가며 슬라이드 업 또는 다운 전환되게 함.
        // 매개변수값(인수) 500은 0.5초를 의미함
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

        // (".notice li:first").click : .notice 요소의 후손 요소
        // 중에서 첫 번째 요소를 클릭하면
        $(".notice li:first").click(function(){
            // #modal과 일치하는 요소에 'active' 클래스를 추가함
            $("#modal").addClass("active");
        });

        // .btn 요소(닫기 버튼)를 클릭하면
        $(".btn").click(function(){
            // #modal의 'active' 클래스를 삭제함
            $("#modal").removeClass("active");
        });

    // 쿠키("popup")의 값이 'none'이면 id값이 'modal'인 요소를 숨깁니다.
    if($.cookie('popup') == 'none'){
        $("#modal").hide();
    }
    // class 값이 'btn'인 요소를 클릭하면 체크박스의 체크 유무에 따라 쿠키를 생성하여 3일간 저장합니다.
    var $expiresChk = $("#expiresChk");
    $(".btn").on("click", closePop);
    function closePop(){
        if($expiresChk.is(":checked")){
            $.cookie("popup", "none", {expires:3, path: "/"});
        }
        $("#modal").fadeOut("fast");
    }
    
    // .bodywrap에 박스슬라이더 적용
    $('.imgslide').bxSlider({
        auto: true,             //자동으로 애니메이션 시작
        speed:1000,              //애니메이션 전환 속도 설정 (500ms = 0.5s)
        pause:5000,             // 애니메이션 유지 시간(1000ms = 1s)
        mode: 'fade',           //전환 모드 fade
        pager: false,           //페이지 안보이게 함
    });
});
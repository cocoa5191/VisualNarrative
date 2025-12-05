$(document).ready(function(){
  console.log('Ready!');

  $(function() {
    $(".list").tablesorter({ 
      // sortList: [[2,1], [3,1]] 
    });
  });

  $(document).on('mouseenter', '.thumb', function(){
    $('.bg').show()
  });

  $(document).on('mouseleave', '.thumb', function(){
    $('.bg').hide()
  });

  // $(document).on('mousemove', function(e){
  //   $('#cursor').css({left: e.pageX, top: e.pageY})
  // });
$(document).ready(function(){
  console.log('Ready!');

  $(function() {
    $(".list").tablesorter({ 
      // sortList: [[2,1], [3,1]] 
    });
  });

  $(document).on('mouseenter', '.thumb', function(){
    $('.bg').show()
  });

  $(document).on('mouseleave', '.thumb', function(){
    $('.bg').hide()
  });

  // $(document).on('mousemove', function(e){
  //   $('#cursor').css({left: e.pageX, top: e.pageY})
  // });

  /* ======================================
    👇 여기에 새 코드를 추가하세요! 👇
    ======================================
  */

  // 1. 모든 '사람' 요소를 선택합니다.
  const people = $('.person');
  
  // 2. 각 '사람'을 초기화합니다.
  people.each(function() {
    const person = $(this);
    const personWidth = person.width();
    const windowWidth = $(window).width();
    
    // 2-1. 랜덤한 시작 위치 (화면 안)
    const startLeft = Math.random() * (windowWidth - personWidth);
    
    // 2-2. 랜덤한 속도 (0.5 ~ 2.0 픽셀/프레임)
    const speed = (Math.random() * 1.5) + 0.5; 
    
    // 2-3. 랜덤한 시작 방향 (1: 오른쪽, -1: 왼쪽)
    const direction = Math.random() < 0.5 ? 1 : -1;

    // 2-4. CSS에 초기 위치를 적용하고, 
    //      data 속성을 이용해 '사람'의 속도와 방향을 저장합니다.
    person.css('left', startLeft + 'px');
    person.data('speed', speed);
    person.data('direction', direction);
  });

  // 3. 애니메이션을 실행할 함수를 만듭니다.
  function movePeople() {
    const windowWidth = $(window).width(); // 창 크기 변경에 대비해 매번 확인

    people.each(function() {
      const person = $(this);
      const personWidth = person.width();

      // 3-1. 저장해둔 속도, 방향, 현재 위치를 가져옵니다.
      let speed = person.data('speed');
      let direction = person.data('direction');
      let currentLeft = parseFloat(person.css('left'));

      // 3-2. 새 위치를 계산합니다.
      let newLeft = currentLeft + (speed * direction);

      // 3-3. 화면 가장자리에 닿았는지 확인합니다.
      if (newLeft < 0) { // 왼쪽 벽
        newLeft = 0;
        direction = 1; // 오른쪽으로 방향 전환
      } else if (newLeft > windowWidth - personWidth) { // 오른쪽 벽
        newLeft = windowWidth - personWidth;
        direction = -1; // 왼쪽으로 방향 전환
      }

      // 3-4. (랜덤 요소) 0.5% 확률로 갑자기 방향을 바꿉니다.
      if (Math.random() < 0.005) { 
        direction *= -1; // 방향 뒤집기
        // 속도도 새로 부여
        speed = (Math.random() * 1.5) + 0.5;
        person.data('speed', speed);
      }
      
      // 3-5. 변경된 위치와 방향을 적용합니다.
      person.data('direction', direction);
      person.css('left', newLeft + 'px');
    });

    // 3-6. 다음 애니메이션 프레임을 요청합니다. (부드러운 반복)
    requestAnimationFrame(movePeople);
  }

  // 4. 첫 애니메이션을 시작합니다!
  movePeople();

  /* ======================================
    👆 여기까지 새 코드를 추가하세요! 👆
    ======================================
  */

});
});

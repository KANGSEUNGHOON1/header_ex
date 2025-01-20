$(document).ready(function () {
  $("#hamburger-menu").click(function () {
    $("#mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
  });
  // 모바일용 닫기 버튼
  $("#close-menu").click(function () {
    $("#mobile-nav").animate(
      {
        right: "-300px",
      },
      300
    );
  });
});

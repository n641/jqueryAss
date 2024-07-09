document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    console.log(targetElement);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

$(".close-item").click(function () {
  $(".drawer").animate({ width: 0 });
});

$(".open-drawer").click(function () {
  $(".drawer").animate({ width: "300px" });
});

$(".singer-item").click(function (e) {
  $(this).children().eq(1).slideToggle();
  $(this)
    .siblings()
    .map((item) => {
      $(this).siblings().eq(item).children().eq(1).slideUp();
    });
});

$("#description").on("input", function () {
  if (this.value.length) {
    $("#num-chars").html(100 - +this.value.length);
  }
});

const targetDate = new Date("2024-10-25T00:00:00");
const interval = setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".day").html(days + " D");
  $(".hour").html(hours + " H");
  $(".minutes").html(minutes + " M");
  $(".seconds").html(seconds + " S");

  if (distance < 0) {
    clearInterval(interval);

    $(".day").html("0" + " D");
    $(".hour").html("0" + " H");
    $(".minutes").html("0" + " M");
    $(".seconds").html("EXPIRED");
  }
}, 1000);

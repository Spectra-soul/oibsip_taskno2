$(".main-menu li:first").addClass("active");

var showSection = function showSection(section, isAnimate) {
  var direction = section.replace(/#/, ""),
    reqSection = $(".section").filter(
      '[data-section="' + direction + '"]'
    ),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $("body, html").animate(
      {
        scrollTop: reqSectionPos
      },
      800
    );
  } else {
    $("body, html").scrollTop(reqSectionPos);
  }
};

var checkSection = function checkSection() {
  $(".section").each(function() {
    var $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
      var currentId = $this.data("section"),
        reqLink = $("a").filter("[href*=\\#" + currentId + "]");
      reqLink
        .closest("li")
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });
};

$(".main-menu").on("click", "a", function(e) {
  e.preventDefault();
  showSection($(this).attr("href"), true);
});

$(window).scroll(function() {
  checkSection();
});

function validateForm() {
    // name
    let nameId = document.forms["myForm"]["name"].value;
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    // email
    let emailId = document.forms["myForm"]["email"].value;
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    //name
    if (!regName.test(nameId) || nameId == "") {
      document.getElementById("form-alert").innerHTML = "Full name is required.";
      return false;
    }
  
    // email
    if (!emailId.match(validEmail) || emailId == "") {
      document.getElementById("form-alert").innerHTML = "A valid email required.";
      return false;
    }
  
    return true;
  }
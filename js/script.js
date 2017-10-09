var index=0;
var maxScroll = $(document).height() - $(window).height();
console.log("maxScoll", maxScroll);
$(document).on('scroll', function() {
    var sections =[$(".homeSection"), $(".guysSection"), $(".girlsSection"),$(".kidsSection"), $(".discountSection")];

    // console.log(sections);
    var scroll = $(document).scrollTop();
    // console.log("scroll", scroll);
    if (scroll <100) {
        // // Store eference to first message
        // var firstMsg = $('.message:first');
        var ref = $(".section-item:first")
        // console.log(ref);
        // Prepend new message here (I'm just cloning...)
        if (index===0) {
          index=sections.length-1;
        } else {
          index-=1;
        }
        var newSection = sections[index];
        $('#section').prepend(newSection);

        // After adding new message(s), set scroll to position of
        // what was the first message
        // console.log("offset",ref.offset());
        $(document).scrollTop(ref.offset().top+scroll);
    } else if (scroll > (maxScroll-900)) {
      var ref = $(".section-item:last")

      // var newSection = sections[index];
      if (index===sections.length) {
        index=0;
      }
      $('#section').append(sections[index]);
      index+=1;
    }
});


// Select all links with hashes
// Remove links that don't actually link to anything

// $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//
//       if (target.length) {
//
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//
//   });


// $("#homeLink").on("click", function(){
//   // alert("guys clicked");
//   // $("#guysSection").prevUntil("#navBar").slideUp(800);
//   $("#homeSection").prevUntil("#navBar").slideUp(800, function(){
//     $("#homeSection").parent().append($("#homeSection").prevAll().get().reverse());
//     $("#homeSection").nextAll().show()
//     console.log($(this).parent().children());
//   });
// })
//
// $("#guysLink").on("click", function(){
//   // alert("guys clicked");
//   // $("#guysSection").prevUntil("#navBar").slideUp(800);
//   $("#guysSection").prevUntil("#navBar").slideUp(800, function(){
//     $("#guysSection").parent().append($("#guysSection").prevAll().get().reverse());
//     $("#guysSection").nextAll().show()
//     console.log($(this).parent().children());
//   });
// })

// $("#girlsLink").on("click", function(){
//   // alert("girls clicked");
//   // $("#girlsSection").prevUntil("#navBar").slideUp(800, function(){
//     var siblingsAbove = $("#girlsSection").prevAll().get().reverse();
//     var toBeAppended=siblingsAbove.slice(0,siblingsAbove.length-1)
//     $("#girlsSection").parent().append(toBeAppended);
//     $("#girlsSection").nextAll().show()
//
//
//
//     // console.log($(this).parent().children());
//   // });
// })

// $("#discountLink").on("click", function(){
//   // alert("home clicked");
//   $("#discountSection").prevUntil("#navBar").slideUp(800, function(){
//     $("#discountSection").parent().append($("#discountSection").prevAll().get().reverse());
//     $("#discountSection").nextAll().show()
//     console.log($(this).parent().children());
//   });
// })


// Cache selectors
var lastId,
    topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) {
        console.log("item: ", item);
        return item;
      }
    });

console.log("menuItems: ", menuItems);
console.log("scrollItems: ", scrollItems);
// Bind click handler to menu items
// so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   // console.log("href:", href);
//   $('html, body').stop().animate({
//       scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   console.log("object on scroll ", $(this));
   console.log("scrollTop:", $(this).scrollTop());
   var fromTop = $(this).scrollTop()+topMenuHeight;
   console.log("fromTop:", fromTop);
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
  //  console.log("cur: ", cur);
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

  //  console.log("lastId: ", lastId);
   console.log("id: ", id);
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});

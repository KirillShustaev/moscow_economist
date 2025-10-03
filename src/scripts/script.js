swiper = new Swiper('.moment__slider', {

	slidesPerView: 1,
	slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
	// mousewheel: {
	// 	sensitivity: 1,
	// 	}
  });

  let nominButton = document.querySelectorAll(".nomin__button")

  nominButton.forEach(e => {
    e.addEventListener("click", ()=> {
        for(elem of nominButton) {
            elem.classList.remove("active")
        }
        e.classList.add("active")
    })

  })

let nominList =  document.querySelectorAll(".nomin__list")

nominButton.forEach(button => {
    let targetBlock = button.getAttribute("data-target")

    button.addEventListener("click", ()=> {
        nominList.forEach(list => {
            if(list.classList.contains(targetBlock)) {
                list.classList.add("visible");
                list.classList.remove("none");
            } else {
                list.classList.remove("visible");
                list.classList.add("none");
            }
        })
    })
})

//

      $(document).ready(function () {
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });

      });

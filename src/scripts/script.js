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
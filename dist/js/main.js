


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	modal();
	checkSubmenu();
	rotateCard();
	visibleSeo();
	stepForm();
	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['about-page']);
		pageWidget(['contacts-page']);
		pageWidget(['context-page']);
		pageWidget(['development-page']);
		pageWidget(['complete-page']);
		pageWidget(['single-complete']);
		pageWidget(['policy']);
		pageWidget(['portfolio-page']);
		pageWidget(['seo-page']);
		pageWidget(['service-page']);
		pageWidget(['work-context']);
		pageWidget(['work-development']);
		pageWidget(['work-seo']);
		pageWidget(['quiz-page']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	if(windowWidth < mediaPoint1) {
		createArrow();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})












// $(document).ready(function()  {

// 	var inputsTel = document.querySelectorAll('input[type="tel"]');
// 	Inputmask({
// 		"mask": "+7 (999) 999-99-99",
// 		showMaskOnHover: false
// 	}).mask(inputsTel);
// })



const partnerSlider = new Swiper('.partners_slider', {
	navigation: {
		nextEl: '.partners_btn_next',
		prevEl: '.partners_btn_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 90,
		}
	}
})

const serviceSlider = new Swiper('.service-slider', {
	navigation: {
		nextEl: '.serviceSlider_btn_next',
		prevEl: '.serviceSlider_btn_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 29,
		}
	}
})



const projectSLider = new Swiper('.workSlider_slider', {
	navigation: {
		nextEl: '.workSlider_btn_next',
		prevEl: '.workSlider_btn_prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		}
	}
})


function rangeState() {
	const fillRAnge = document.querySelectorAll('.traffic_range')
		Array.from(fillRAnge).map((el, i) => {
			el.style.width = el.dataset.percent / 5
		})

}

rangeState();



function rotateCard() {
	const cards = document.querySelectorAll('.direction_item_w')

	Array.from(cards).map((card, e) => {
		card.addEventListener('click', (e) => {
			// if(e.target.classList.contains('direction_toggle')) {
				card.classList.toggle('active')
			// }
		})
	})
}


function checkSubmenu() {
	const menuList = document.querySelectorAll('.nav_list');

	Array.from(menuList).map((menuParentItem) => {
		let menuItem = menuParentItem.querySelectorAll('li')
	
		Array.from(menuItem).map((el) => {
			let checkItems = el.children
			Array.from(checkItems).map((items) =>{
				if(items.classList.contains('sub-menu')) {
					el.classList.add('parent_element_item')
				}
			})
		})
	})
}






function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}



function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			
			popup.forEach((el) => {
				isRemove(el)
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}

function accordion(title, content) {
	let accordionTitle = $(title),
		accordionContent = $(content);
	$(accordionContent).hide();
	
	$(accordionTitle).on('click', function () {
		let $this = $(this);
		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
		$(accordionContent).slideUp();

		if (!$this.next().is(":visible")) {
			$this.next().slideDown();
		}
	});
};


function visibleSeo() {
  let seoBlocks = document.querySelectorAll(".seo-block--w");

  Array.from(seoBlocks).forEach((seoBlock) => {
    let loadMoreButton = seoBlock.querySelector(".loadmore_btn");
    let smallBlock = seoBlock.querySelector(".seo-block");
    smallBlock.classList.remove("visible");

    loadMoreButton.addEventListener("click", function () {
      if (smallBlock.classList.contains("visible")) {
        smallBlock.classList.remove("visible");
        loadMoreButton.querySelector("button").innerHTML = "Показать еще";
      } else {
        smallBlock.classList.add("visible");
        loadMoreButton.querySelector("button").innerHTML = "Скрыть";
      }
    });
  });
}


function createArrow() {
	let menuItem = document.querySelector('.burger_nav_list>.parent_element_item')

	let arrowDown = document.createElement('span');
	arrowDown.innerText = '';
	menuItem.appendChild(arrowDown);

	arrowDown.addEventListener('click', (e) => {
		if(e.currentTarget) {
			arrowDown.previousElementSibling.classList.toggle('active')
			e.currentTarget.classList.toggle('active_mod')
		}
	})
}



function stepForm() {
	let currentStep = 0;

	const formSteps = document.querySelectorAll('.quiz_step');
	const nextButton = document.querySelector('.next-step');
	const prevButton = document.querySelector('.prev-step');

	formSteps[0].style.display = "block";



	function goToNextStep() {
		formSteps[currentStep].style.display = 'none';
		currentStep += 1;
		if (currentStep >= formSteps.length) {
			return;
		}
		formSteps[currentStep].style.display = 'block';
		updateProgress();
		if (currentStep === formSteps.length - 1) {
			let btn = nextButton.querySelector('button')

			nextButton.classList.remove('next-step')
			// setTimeout(() => {

				btn.type = 'submit'
				btn.innerHTML = "Отправить"

				btn.addEventListener('click', (e) => {
					e.preventDefault();
					sendForm(btn)
				}) 
			// }, 100)
		}
	}

	function goToPrevStep() {
		formSteps[currentStep].style.display = 'none';
		currentStep -= 1;
		formSteps[currentStep].style.display = 'block';
		updateProgress();
		nextButton.style.display = 'block';
		let btn = nextButton.querySelector('button')

		nextButton.classList.add('next-step')
		// setTimeout(() => {

			btn.type = 'button'
			btn.innerHTML = "Далее"
	}

	nextButton.addEventListener('click', () => {
		if (validateForm()) {
			goToNextStep();
		}

	});

	prevButton.addEventListener('click', () => {
		goToPrevStep();
	});

	function updateProgress() {
		const formSteps = document.querySelectorAll('.quiz_step');
		const progressBar = document.querySelector('.quiz_percentLine');
	
		const progressStep = Math.ceil((currentStep + 1) / formSteps.length * 100);
		progressBar.style.width = `${progressStep}%`;
		progressBar.setAttribute('data-percent', `${progressStep}%`);
	}

	updateProgress();
}

function validateForm() {
  let inputCompany = document.querySelector('#quiz-company');
  let inputName = document.querySelector('#quiz-people');
  let inputNumber = document.querySelector('#quiz-number');
	const inputsToValidate = [inputCompany, inputName, inputNumber];
	
	if (valid(inputsToValidate)) {
		return true;
	}
  
}


function valid(inputs) {
  let isAllValid = true;
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
		if(input) {
			if (input.value.trim() === '') {
				input.classList.add('no-valid');

				isAllValid = false;
			} else {
				input.classList.remove('no-valid');
			}
		}
	}
	return isAllValid;
}


function sendForm(submitButton) {
	submitButton.addEventListener('click', () => {
		const formData = {
			company: document.querySelector('#quiz-company').value,
			name: document.querySelector('#quiz-people').value,
			number: document.querySelector('#quiz-number').value,
			websiteType: document.querySelector('input[name="typeWebsite"]:checked').value,
			addWebsite: Array.from(document.querySelectorAll('input[name="addWebsite"]:checked')).map(checkbox => checkbox.value)
		};
		sendData(formData);
	});
}

function sendData(data) {
  const url = 'https://example.com/submit-form';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  
  fetch(url, options)
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        window.location.href = 'https://example.com/thank-you'; 
      } else {
        console.error('Error submitting form');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
}
















































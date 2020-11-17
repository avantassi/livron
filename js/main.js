$(document).ready(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
	}

	$(".modal-open").on('click', function(e){
		console.log(e);
		showModal('#modal1');
	});
	
	$(".modal-open2").on('click', function(e){
		console.log(e);
		showModal('#modal2');
	});
	
	$(".modal-open3").on('click', function(e){
		console.log(e);
		showModal('#modal3');
	});
	
	$(".modal-open4").on('click', function(e){
		console.log(e);
		showModal('#modal4');
	});
	
	$(".modal-open5").on('click', function(e){
		console.log(e);
		showModal('#modal5');
	});
	
	$(".modal-open6").on('click', function(e){
		console.log(e);
		showModal('#modal6');
	});
	
	$(".modal-open7").on('click', function(e){
		console.log(e);
		showModal('#modal7');
    });
	
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.dialog').length)
		||	($(e.target).hasClass('dialog'))
		||	($(e.target).hasClass('modal-open'))
		||	($(e.target).hasClass('modal-open2'))
		||	($(e.target).hasClass('modal-open3'))
		||	($(e.target).hasClass('modal-open4'))
		||	($(e.target).hasClass('modal-open5'))
		||	($(e.target).hasClass('modal-open6'))
		||	($(e.target).hasClass('modal-open7')))
		) {
			hideModals();
		}
	});

	$('.close').on('click', function(e){
			hideModals();
	});
	
});

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 50, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});

$(window).load(function(){
    $('.str').liMarquee({
        drag: false,
        hoverstop: false
    });
});  

$(function() {
	$.scrollify({
	  section : ".section",
	  before:function(i,panels) {

		var ref = panels[i].attr("data-section-name");
  
		$(".pagination .active").removeClass("active");
  
		$(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
	  },
	  afterRender:function() {
		var pagination = "<ul class=\"pagination\">";
		var activeClass = "";
		$(".panel").each(function(i) {
		  activeClass = "";
		  if(i===$.scrollify.currentIndex()) {
			activeClass = "active";
		  }
		  pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
		});
  
		pagination += "</ul>";
  
		$(".hero").append(pagination);

		$(".pagination a").on("click",$.scrollify.move);
	  }
	});
  });

  $(function(){$(".arrow").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1100),!1}})});  
	monomer = {
		__addTouch:function  (event) {

			_touch = $("<div>").addClass("_touch").css({"top":event.clientY ,"left":event.clientX})
			$("body").append(_touch);
		},
		__removeTouch:function  (event) {
		
			$("._touch").css({"top":event.clientY - 32  ,"left":event.clientX -32})
			$("._touch").addClass("_touch_expand");
			setTimeout(function () {
				$("._touch").removeClass("_touch_expand");
				$("._touch").remove();
			},300)
		},
		__expandSearch: function () {
			$(".expand-search").prev().toggleClass("search-expanded");
		},
		__enableBodyTouch: function (){
			setTimeout(function () {
				__displayedMenu = true;
			},500)
		},
		__setAspect : function(){
			var aspect_16_9 = $(".aspect_16_9");
			var aspect_3_2  = $(".aspect_3_2");
			var aspect_4_3  = $(".aspect_4_3");
			var aspect_1_1  = $(".aspect_1_1");

			$.each(aspect_16_9,function(index,element){

				$(element).height($(element).width() * 9 / 16);
			})
			$.each(aspect_3_2,function(index,element){
				$(element).height($(element).width() * 2 / 3);
			})
			$.each(aspect_4_3,function(index,element){
				$(element).height($(element).width() * 3 / 4);
			})
			$.each(aspect_1_1,function(index,element){
				$(element).height($(element).width());
			})
		},
		//Public
		expandLeftMenu:function () {
			__displayedMenu= false;
			$(".left-menu").toggleClass("left-menu-expanded");
			monomer.__enableBodyTouch();
		},
		expandRightMenu:function () {
			__displayedMenu= false;
			$(".right-menu").show()
			setTimeout(function () {
				$(".right-menu").toggleClass("right-menu-expanded");
			},300)
			monomer.__enableBodyTouch();
		},
		//Elemento a desplegar, eventoTouch
		expandConfig:function (element,event) {
			
			__displayedMenu= false;
			element.css({"top":event.originalEvent.clientY - 10, "left":event.originalEvent.clientX -250});
			element.toggleClass("config-menu-expanded");
			monomer.__enableBodyTouch();	
		}

	}

	var __displayedMenu= false;
	var em = 16;
	$(function () {
		em = getEmPixels();
		var width = window.innerWidth,
	        height = window.innerHeight;
	    setInterval(function () {
	    	monomer.__setAspect()
	        if (window.innerWidth !== width || window.innerHeight !== height) {
	            width = window.innerWidth;;
	            height = window.innerHeight;
	            $(window).trigger('resolutionchange');
	        }
	    }, 50);

		monomer.__setAspect();

		$('input[type="text"]').after($("<hr>").addClass("text_after"))
		$('input[type="text"]').on("focus",function () {
			el = $(this)
			el.next().css("width",0)

			
		});
		$('input[type="text"]').on("blur",function () {
			$(this).next().removeClass("text_after_focused");
		});
		$('input[type="checkbox"]').each(function (i,chkBox) {
			chkBox.addEventListener("pointerdown",function (event) {
				var el = $(event.currentTarget) 
				el.addClass("icon-spin-down");
				setTimeout(function () {
					el.removeClass("icon-spin-down");
				},200)
			})
		});
		
		$(window).bind('resolutionchange', function () {
			monomer.__setAspect();
			$(".content").height(window.innerHeight - (em * 3) )
		});
		
		$(".content").height(window.innerHeight - (em * 3))
		//$(".expand-search").prev().css("visibility","hidden")
		$(".expand-search").on("pointerup",function () {
			monomer.__expandSearch();
		});
		$(".config-menu").on('pointerover',function (event) {
							__displayedMenu = false;
						}).on('pointerout',function (event) {
							__displayedMenu = true;
						}).on('pointerup',function (event) {
							setTimeout(function () {
								$(".config-menu").removeClass("config-menu-expanded");
							},500);
						})
		$("a , button, input, li").each(function (i,btn) {
			btn.addEventListener("pointerdown",function  (event) {
				monomer.__addTouch(event)
			})
			btn.addEventListener("pointerup",function (event) {
				monomer.__removeTouch(event)
			})
		})
		$(".expand-LeftMenu").on("pointerup",function () {
			monomer.expandLeftMenu()
		})
		$(".expand-RightMenu").on("pointerup",function () {
			monomer.expandRightMenu()
		})
		$(".expand-config").on("pointerup",function (event) {
			monomer.expandConfig($(".config-menu"),event)
		})
		$(".content , .header").on("pointerup",function (event) {
			if(__displayedMenu==true){		
				$(".config-menu").removeClass("config-menu-expanded");
				$(".left-menu").removeClass("left-menu-expanded");
				$(".right-menu").removeClass("right-menu-expanded");
				__displayedMenu= false;
			}
		})
	})


    var important = "!important;";
    var style = "position:absolute" + important + "visibility:hidden" + important + "width:1em" + important + "font-size:1em" + important + "padding:0" + important;
    window.getEmPixels = function () {
        var extraBody;
       	element = extraBody = document.createElement("body");
        extraBody.style.cssText = "font-size:1em" + important;
        document.documentElement.insertBefore(extraBody, document.body);
      	var testElement = document.createElement("i");
        testElement.style.cssText = style;
        element.appendChild(testElement);
		var value = testElement.clientWidth;
        if (extraBody) {
            document.documentElement.removeChild(extraBody);
        }
        else {
            element.removeChild(testElement);
        }
        return value;
    };








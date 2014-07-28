	material = {
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
			material.__enableBodyTouch();
		},
		expandRightMenu:function () {
			__displayedMenu= false;
			$(".right-menu").show()
			setTimeout(function () {
				$(".right-menu").toggleClass("right-menu-expanded");
			},300)
			material.__enableBodyTouch();
		},
		//Elemento a desplegar, eventoTouch
		expandConfig:function (element,event) {
			__displayedMenu= false;
			element.css({"top":event.clientY, "left":event.clientX -250});
			element.toggleClass("config-menu-expanded");
			material.__enableBodyTouch();	
		}

	}

	var __displayedMenu= false;
	var em = 16;
	$(function () {
		em = getEmPixels();
		var width = window.innerWidth,
	        height = window.innerHeight;
	    setInterval(function () {
	    	material.__setAspect()
	        if (window.innerWidth !== width || window.innerHeight !== height) {
	            width = window.innerWidth;;
	            height = window.innerHeight;
	            $(window).trigger('resolutionchange');
	        }
	    }, 50);

		material.__setAspect();

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
			material.__setAspect();
			$(".content").width(window.innerWidth).height(window.innerHeight - (em * 3) )
		});
		
		$(".content").width(window.innerWidth).height(window.innerHeight - (em * 3))
		//$(".expand-search").prev().css("visibility","hidden")
		$(".expand-search").on("pointerup",function () {
			material.__expandSearch();
		});
		$("a , button, input, li").each(function (i,btn) {
			btn.addEventListener("pointerdown",function  (event) {
				material.__addTouch(event)
			})
			btn.addEventListener("pointerup",function (event) {
				material.__removeTouch(event)
			})
		})
		$(".expand-LeftMenu").on("pointerup",function () {
			material.expandLeftMenu()
		})
		$(".expand-RightMenu").on("pointerup",function () {
			material.expandRightMenu()
		})
		$(".expand-config").on("pointerup",function (event) {
			material.expandConfig($(".config-menu"),event)
		})
		$(".content , .header").on("pointerup",function (event) {
			if(__displayedMenu==true){
				material.__addTouch(event)
				$(".config-menu").removeClass("config-menu-expanded");
				$(".left-menu").removeClass("left-menu-expanded");
				material.__removeTouch(event)
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








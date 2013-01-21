(function() {

	/** Configs **/

	var items = [
		{
			name: "Item 1",
			image: "http://brucemctague.com/wp-content/uploads/2010/07/one-1.jpg"
		},
		{
			name: "Item 2",
			image: "http://nasmm.files.wordpress.com/2012/02/2-photo.gif"
		},
		{
			name: "Item 3",
			image: "http://www.techdigest.tv/three%20thumb.jpg"
		},
		{
			name: "Item 4",
			image: "http://georgejessielove.files.wordpress.com/2012/05/four.jpg"
		},
		{
			name: "Item 5",
			image: "http://www.takefive-design.com/take%20five%20design.png"
		},
		{
			name: "Item 6",
			image: "http://www.charitytechnews.co.uk/wp-content/uploads/2012/11/Six-Degrees-Logo.jpg"
		},
		{
			name: "Item 7",
			image: "http://blog.luckyvitamin.com/wp-content/uploads/2007/12/seven.png"
		},
		{
			name: "Item 8",
			image: "http://us.123rf.com/400wm/400/400/penog123/penog1231105/penog123110500001/9461501-eight-ball-isolated-over-white-square-background.jpg"
		},
		{
			name: "Item 9",
			image: "http://broadcast.oreilly.com/nine.jpg"
		},
		{
			name: "Item 10",
			image: "http://johndobbs.com/wp-content/uploads/2011/03/10Ten1.jpg"
		},
	];
	
	var positions = ['left', 'mid', 'right'];

	/** End Configs **/

	$(document).ready(function() {
		var start, runLoop, effects, countDown, endGame;

		for(var i=0, max=items.length; i<max; i++) {
			var item = items[i];

			var itemDiv = $("<div class='item' data-index='"+i+"'><img src='"+item.image+"' /><span>"+item.name+"</span></div>");

			$("#listModal").prepend(itemDiv);
		}

		$("#listModal .item").click(function() {
			if($(this).hasClass("selected")) {
				$(this).removeClass("selected");
				
				if($("#listModal .selected").length < 3) {
                    $("#startOverlay").fadeIn(300);
                }
			} else {
				if($("#listModal .selected").length < 3) {
                    $(this).addClass("selected");
				}

                if($("#listModal .selected").length === 3) {
                    $("#startOverlay").fadeIn(300);
                }
			}
		});
		
		$("#startGame").click(function() {
			var selected  = [];
			
			$(".selected").each(function(index) {
				var item = items[$(this).attr('data-index')];
				var cup = $("<div class='cup "+positions[index]+"'><img src='"+item.image+"' /></div>");
				
				$(cup).attr('data-index', $(this).attr('data-index'));
				
				$("#game").append(cup);
			})
			
			$("#listModal").hide();
			$("#startGame").hide();
			$(".selected").removeClass("selected");
			
			countDown();
			
			
		});

		countDown = function() {
			setTimeout(function() {
				$(".cup img").fadeOut(200)
				setTimeout(function() { start(0, 10); }, 200);
			}, 3000)	
		};

		start = runLoop = function(count, stop) {
			if(count < stop) {
				var keys = Object.keys(effects);

				var effect = effects[keys[Math.floor(Math.random() * keys.length)]];

				effect(function() {
					runLoop(++count, stop);
				})
			} else {
				endGame();
			}
		};
		
		endGame = function() {
			$(".cup img").fadeIn(200);
		}

		/***** Animation Fun ******/

		var singleTime = 700;
		var doubleTime = 300;

		effects = {

			leftHopToMid: function(cb) {
				var left = $(".left");
				var mid = $(".mid");

				$(".left, .mid").addClass("double-time");

				$(left).addClass("up").addClass("lm-mid");

				setTimeout(function() {
					$(left).removeClass("up").removeClass("lm-mid").removeClass("left").addClass("mid");
					$(mid).removeClass("mid").addClass("left");

					setTimeout(function() {
						$(".left, .mid").removeClass("double-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime);
				}, doubleTime);
			},

			rightHopToMid: function(cb) {

				var right = $(".right");
				var mid = $(".mid");

				$(".right, .mid").addClass("double-time");

				$(right).addClass("up").addClass("rm-mid");

				setTimeout(function() {
					$(right).removeClass("up").removeClass("rm-mid").removeClass("right").addClass("mid");
					$(mid).removeClass("mid").addClass("right");

					setTimeout(function() {
						$(".right, .mid").removeClass("double-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime);
				}, doubleTime);
			},

			leftDropToMid: function(cb) {
				var left = $(".left");
				var mid = $(".mid");

				$(".left, .mid").addClass("double-time");

				$(left).addClass("down").addClass("lm-mid");

				setTimeout(function() {
					$(left).removeClass("down").removeClass("lm-mid").removeClass("left").addClass("mid");
					$(mid).removeClass("mid").addClass("left");

					setTimeout(function() {
						$(".left, .mid").removeClass("double-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime);
				}, doubleTime);
			},

			rightDropToMid: function(cb) {

				var right = $(".right");
				var mid = $(".mid");

				$(".right, .mid").addClass("double-time");

				$(right).addClass("down").addClass("rm-mid");

				setTimeout(function() {
					$(right).removeClass("down").removeClass("rm-mid").removeClass("right").addClass("mid");
					$(mid).removeClass("mid").addClass("right");

					setTimeout(function() {
						$(".right, .mid").removeClass("double-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime);
				}, doubleTime);
			},

			counterClockwise: function(cb) {
				var right = $(".right");
				var left = $(".left");

				$(".right, .left").addClass("double-time");

				$(left).addClass("mid").addClass("down").removeClass("left");
				$(right).addClass("mid").addClass("up").removeClass("right");

				setTimeout(function() {
					$(right).removeClass("mid").removeClass("up").addClass("left");
					$(left).removeClass("mid").removeClass("down").addClass("right");

					setTimeout(function() {
						$(left).removeClass("double-time");
						$(right).removeClass("double-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime)
				}, doubleTime);
			},

			clockwise: function(cb) {
				var right = $(".right");
				var left = $(".left");

				$(".right, .left").addClass("double-time");

				$(left).addClass("mid").addClass("up").removeClass("left");
				$(right).addClass("mid").addClass("down").removeClass("right");

				setTimeout(function() {
					$(right).removeClass("mid").removeClass("down").addClass("left");
					$(left).removeClass("mid").removeClass("up").addClass("right");

					setTimeout(function() {
						$(left).removeClass("double-time");
						$(right).removeClass("double-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime)
				}, doubleTime);
			},

			rightParallels: function(cb) {
				var right = $(".right");
				var left = $(".left");
				var mid = $(".mid");

				$(".right, .left, .mid").addClass("single-time");

				$(right).addClass("up");
				$(mid).addClass("down");
				$(left).removeClass("left").addClass("right");

				setTimeout(function() {
					$(right).removeClass("single-time").addClass("double-time");
					$(mid).removeClass("single-time").addClass("double-time");

					$(right).removeClass("right").removeClass("up").addClass("mid");
					$(mid).removeClass("mid").removeClass("down").addClass("left");

					setTimeout(function() {
						$(".right, .left, .mid").removeClass("double-time").removeClass("single-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime)
				}, singleTime);
			},



			leftParallels: function(cb) {
				var right = $(".right");
				var left = $(".left");
				var mid = $(".mid");

				$(".right, .left, .mid").addClass("single-time");

				$(left).addClass("up");
				$(mid).addClass("down");
				$(right).removeClass("right").addClass("left");

				setTimeout(function() {
					$(left).removeClass("single-time").addClass("double-time");
					$(mid).removeClass("single-time").addClass("double-time");

					$(left).removeClass("left").removeClass("up").addClass("mid");
					$(mid).removeClass("mid").removeClass("down").addClass("right");

					setTimeout(function() {
						$(".right, .left, .mid").removeClass("double-time").removeClass("single-time");

						if(typeof(cb) === "function") {
							cb();
						}
					}, doubleTime)
				}, singleTime);
			}

		};

	});


})();
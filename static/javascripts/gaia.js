(function() {
	$(document).ready(function() {
		var start, runLoop, effects;

		start = runLoop = function(count, stop) {
		if(count < stop) {
				var keys = Object.keys(effects);

				var effect = effects[keys[Math.floor(Math.random() * keys.length)]];

				effect(function() {
					runLoop(++count, stop);
				})
			}
		};

		/***** Animation Fun ******/

		var singleTime = 1000;
		var doubleTime = 500;

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

		start(0, 10);

	});


})();
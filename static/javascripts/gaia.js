(function() {

	/** Configs **/

	var items = [
		{
			name: "Item 1",
			image: "http://brucemctague.com/wp-content/uploads/2010/07/one-1.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 2",
			image: "http://nasmm.files.wordpress.com/2012/02/2-photo.gif",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 3",
			image: "http://www.techdigest.tv/three%20thumb.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 4",
			image: "http://georgejessielove.files.wordpress.com/2012/05/four.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 5",
			image: "http://www.takefive-design.com/take%20five%20design.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 6",
			image: "http://www.charitytechnews.co.uk/wp-content/uploads/2012/11/Six-Degrees-Logo.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 7",
			image: "http://blog.luckyvitamin.com/wp-content/uploads/2007/12/seven.png",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 8",
			image: "http://us.123rf.com/400wm/400/400/penog123/penog1231105/penog123110500001/9461501-eight-ball-isolated-over-white-square-background.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 9",
			image: "http://broadcast.oreilly.com/nine.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
		{
			name: "Item 10",
			image: "http://johndobbs.com/wp-content/uploads/2011/03/10Ten1.jpg",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis, lectus sit amet sodales accumsan, purus felis commodo odio, vel blandit tellus odio ut purus. Aliquam dapibus, tortor id lacinia porta, lorem ligula sodales nisl, sed molestie quam magna at urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas laoreet cursus vulputate. Fusce viverra euismod diam, et porta velit aliquet ut. Donec at nulla vel urna volutpat pharetra. Sed id leo at nunc elementum euismod quis a metus. Etiam quis orci at leo ultrices hendrerit consequat ac elit. Nam non massa non est mattis imperdiet sit amet accumsan mi. Suspendisse porttitor orci eu arcu porttitor eget porttitor massa elementum. Donec sed elit in eros vehicula tristique. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum aliquet tellus id nulla convallis luctus pharetra nunc mollis. Cras laoreet facilisis gravida. Sed sem eros, varius eu auctor eu, molestie vitae metus. Ut lectus magna, vulputate vel commodo ut, vestibulum eget est. <br> Suspendisse rhoncus consequat libero. Suspendisse potenti. Ut vel nunc mollis sem tempor iaculis. Sed porta enim quis eros elementum nec elementum eros tempus. Suspendisse gravida auctor tortor non dignissim. Nunc vitae mi sed lorem bibendum accumsan. Nulla lorem magna, viverra nec ultrices porttitor, dictum sit amet ligula. Vivamus sagittis libero a lorem sagittis et egestas ante faucibus. Etiam at felis nibh. Donec feugiat bibendum dui, sed volutpat sem aliquam laoreet. Aenean in mattis diam. Cras nisi nibh, cursus id facilisis eget, varius ac magna. <br> Donec convallis erat id libero viverra elementum. Donec nec lorem blandit erat dictum pulvinar a quis nisi. Sed velit arcu, sollicitudin in pharetra nec, faucibus eu urna. Suspendisse vulputate viverra pharetra. Donec volutpat, enim et aliquet ullamcorper, tortor eros mollis neque, a pulvinar ante lorem nec sapien. Curabitur lobortis odio mauris, eu iaculis metus. Nunc molestie enim eget dui iaculis pellentesque. Nulla facilisi. In vel gravida enim. Nunc lacinia dui nec nisi malesuada eu condimentum tellus sagittis."
		},
	];

	/** End Configs **/

	var directions = {
		40: "down",
		39: "right",
		38: "up",
		37: "left",
	};
	
	var keysDown = {
		"down": false,
		"right": false,
		"up": false,
		"left": false
	}
	
	var spawnVariance = 1;
	var spawnRate = 75;
	var prizeRate = 5;
	
	var enemies = [];
	
	var loopInterval;
	var inJump = false;
	
	$(document).ready(function() {
		
		$(".player").css('bottom', $(".player").offset().top + $(".player").height());
		

		
		$(document).keydown(function(e) {
			var dir = directions[e.keyCode] ? directions[e.keyCode] : false;
			
			if(dir) {
				keysDown[dir] = true;
				
				switch(dir) {
					case "up":
						if(!inJump) {
							inJump = true;
							$(".player").css('bottom', '+=20px');
							setTimeout(function() { 
								$(".player").css('bottom', '-=20px'); 
								setTimeout(function() {
									var pLeft = $(".player").offset().left;
									
									var alive = [];
									
									for(var i=0, max=enemies.length; i<max; i++) {
										var enemy = enemies[i];
										
										var eLeft = $(enemy).offset().left;
										
										if(Math.abs(eLeft - pLeft) < 20) {
											kill(enemy);
										} else {
											alive.push(enemy);
										}
									}
									
									enemies = alive;
									
									inJump = false;
								}, 210);
							}, 210);
						}
						break;
				}
			}
		});
		
		$(document).keyup(function(e) {
			var dir = directions[e.keyCode] ? directions[e.keyCode] : false;
			
			if(dir) {
				keysDown[dir] = false;
			}
		});
		
		
		loopInterval = setInterval(eventLoop, 50);
		
	});

	

	function eventLoop() {
		if(keysDown.right) {
			$(".player").css('left', '+=10px');
		}
		
		if(keysDown.left) {
			$(".player").css('left', '-=10px');
		}
		
		if(Math.floor(Math.random() * (spawnRate / spawnVariance)) === 1) spawn();
		
		var pLeft = $(".player").offset().left;
		
		for(var i=0, max=enemies.length; i<max; i++) {
			var enemy = enemies[i];

			if(pLeft < $(enemy).offset().left) {
				$(enemy).css('left', "-=5px");
			} else if(pLeft > $(enemy).offset().left) {
				$(enemy).css('left', '+=5px');
			}
			
			if(Math.abs($(enemy).offset().left - pLeft) < 20 && !inJump) {
				clearInterval(loopInterval);
				console.log("You lose");
				break;
			}
		}
	}
	
	function spawn() {
		var spawn = $("<div>").addClass("pawn").addClass("enemy");
		$("#game").append(spawn);
		$(spawn).css('left', $(spawn).offset().left);
		enemies.push(spawn);
	}
	
	function kill(enemy) {
		console.log("hit");
		$(enemy).remove();
		
		if(Math.floor(Math.random() * prizeRate) === 1) {
			
			if(items.length) {
				var prize = items.shift();
				spawnVariance += .8;
				
				console.log("You won "+prize.name);
			} else {
				clearInterval(loopInterval);
				console.log("You win!");
			}
		}
	}

})();
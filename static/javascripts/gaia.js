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
	
	var positions = ['left', 'mid', 'right'];

	/** End Configs **/

	$(document).ready(function() {
		var start, runLoop, effects, countDown, endGame;

		for(var i=0, max=items.length; i<max; i++) {
			var item = items[i];

			var itemDiv = $("<div class='item' data-index='"+i+"'><img src='"+item.image+"' /><span>"+item.name+"</span></div>");

			$("#listModal").append(itemDiv);
		}

		$("#listModal .item").click(function() {
			if($(this).hasClass("selected")) {
				$(this).removeClass("selected");
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
			$("#message").text("3...");
			
			setTimeout(function() {
				$("#message").text("2...");
			}, 1000);
			
			setTimeout(function() {
				$("#message").text("1...");
			}, 2000);
			
			setTimeout(function() {
				$(".cup img").fadeOut(200)
				$("#message").fadeOut(200);
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
			$("#message").text("Choose Your Prize").fadeIn(200);
			
			$(".cup").click(function() {
				$(this).children().fadeIn(200);
				
				$(".cup").unbind();
				$(this).siblings().fadeOut(200);
				
				var item = items[$(this).attr('data-index')];
				
				var span = $("<span>").html(item.description).css('display', 'none');
				$(this).append(span);
				
				$(this).addClass("win");

				var that = this;

				setTimeout(function() {
					$(that).children("span").fadeIn(200);
				}, 1000);
			});
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
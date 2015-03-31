$("#searchItem").change(function() {
	var searchField = document.getElementById("searchItem");
	var searchLength = searchField.value.length;
	if (searchLength < 3 || searchLength > 50) {
		$(this).after("<div class='alert alert-warning' id='success-alert' role='alert'>The search value should be between 3 and 50 chars long!</div>");
//		$("#success-alert").fadeTo(1000, 500).slideUp(500, function() {
//			$("#success-alert").alert('close');
//		});
	}
});

$("#town").change(function() {
	var townField = document.getElementById("town");
	var townLength = townField.value.length;
	var regex = /[^A-Za-z ]/g

	if (townLength < 4 || townLength > 20) {
		$(this).after("<div class='alert alert-warning' id='success-alert' role='alert'>The town value should be between 4 and 20 chars long!</div>");
//		$("#success-alert").fadeTo(1000, 500).slideUp(500, function() {
//			$("#success-alert").alert('close');
//		});
	} else {
		if (regex.test($('#town').val())) {
			$(this).after("<div class='alert alert-warning' id='success-alert' role='alert'>No Special Symbols and numbers are allowed!!!</div>");
//			$("#success-alert").fadeTo(1000, 500).slideUp(500, function() {
//				$("#success-alert").alert('close');
//			});
		}
	}
});

$("form").submit(function() {
	var searchParam = $("#searchItem").val();
	var ageParam = $("#age").val();
	var contryParam = $("#country").val();
	var townParam = $("#town").val();
	var subscriberParam = $("input[name='optionsSubscription']:checked").val();
	var genderParam = $("input[name='optionsGender']:checked").val();

	if (searchParam) {
		alert("Search: " + searchParam + "\n" + "Age: " + ageParam + "\n" + "Country: " + contryParam + "\n" + "Town: " + townParam + "\n" + "Subscriber: " + subscriberParam + "\n" + "Gender: " + genderParam);
	};
});
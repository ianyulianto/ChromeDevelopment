function generateCategory() {
	//	Populate Category
	util_requestToServer("get", "data/poshcategory", {}, function(response) {		
		for (var i = 0; i < response.length; i++) {
			var item = response[i];
			var queryElement = "<option value='" + item["id"] + "'>" + item["value"] + "</option>";
			
			$("#category_list").append(queryElement);
		};
	});
}

function login(_username, _password) {
	var username = $("#username_txt").val();
	var password = $("#password_txt").val();
	var param = {};
	param.u = username;
	param.p = password;

	// Login
	util_requestToServer("post", "user/login", param, function(response) {
		var status = response["status"];

		if ( status == "success" ) {

			//	Call mainProcess() Function
			mainProcess();
			
		}
	});
}

function mainProcess() {
	//	Change Icon
	util_changeIcon("./images/logo.png");
}


var db = [
	{name: "James Butters", email:"James@gmail.com", age:15},
	{name: "Mark Robinson", email:"Mark@gmail.com", age:23},
	{name: "Lara Barbosa", email:"lara@gmail.com", age:23}
];


(function Avatars(db){
	this.init = function(){
		this.generateList();
		this.enterUser();
	};

	this.generateList = function(){
		var parent = document.querySelector('#parent_avatars');
		var template = " ";

		for(var e = 0; e < db.length; e++){

			template += '<div class="col-sm-4">';
			template += 	'<div class="card">';
			template += 		'<div class="card-delete" data-card="">x</div>';
			template += 		'<div class="card-block">';
			template += 			'<h3 class="card-title">'+ db[e].name +'</h3>'
			template += 			'<p class="card-text"><strong>Email:</strong> '+ db[e].email+'</p>'
			template += 			'<p class="card-text"><strong>Age:</strong> '+ db[e].age+'</p>'
			template += 		'</div>'
			template += 	'</div>'
			template += '</div>'

		}

		parent.innerHTML = " ";
		parent.insertAdjacentHTML("afterbegin", template);


	};

	this.enterUser = function(){

		function grabUser(){
			//What do i need to achieve what i want
			var name = document.querySelector('#user_name').value;
			var email = document.querySelector('#user_email').value;
			var age = document.querySelector('#user_age').value;

			document.querySelector('#myForm').reset();

			db.push({name:name, email:email, age: age});
			generateList();

		}

		document.querySelector('#myForm').addEventListener("submit",function(e){
			e.preventDefault();
			grabUser();

		});
	};

	this.init();
})(db);
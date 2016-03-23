// register 
Template.register.events({
    'submit #register': function(e, tpl){
		e.preventDefault();
		//alert("register"); 
		//var birth = e.target.birth.value;
		var sex = e.target.sex.value;
		var username =e.target.username.value;
		var firstname =e.target.firstname.value;
		var lastname = e.target.lastname.value;
		var pays =e.target.pays.value;
		var ville =e.target.ville.value;
		var email =e.target.email.value;
		var password =e.target.password.value;
		var rerole = 'member';
		var day = e.target.day.value;
		var month = e.target.month.value;
		alert(month);
		var year = e.target.year.value;
		var birth = day+"-"+month+"-"+year;
		
		var profile={
			username:username,
			firstname:firstname,
			lastname:lastname,
			sex:sex,
			birth:birth,
			pays:pays,
			ville:ville
		}
			
		Meteor.call('regUser',profile, email, password, rerole);
			alert("Success Register!");
		//Clear form
		e.target.username.value="";
		e.target.firstname.value="";
		e.target.lastname.value="";
		e.target.pays.value="";
		e.target.ville.value="";
		e.target.email.value="";
		e.target.password.value="";   
    }		
});
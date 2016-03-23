
Template.profileUser.helpers({
	
	getUserProfile:function(){
		var id = Meteor.userId();
		console.log("usrId:"+id);
		return Meteor.users.findOne({_id:id});
	}
});
Template.editProfile1.helpers({
	geteditprofile:function(){
		var id = Meteor.userId();
		return Meteor.users.findOne({_id:id});
	}
});
Template.editProfile1.events({
	'submit form':function(e){
		//alert('ok');
		e.preventDefault();
		var id = Meteor.userId();
		//alert(id);
		var birth = e.target.birth.value;
		alert(birth);
		var sex = e.target.sex.value;
		//alert(sex);
		var username =e.target.username.value;

		var firstname =e.target.firstname.value;
		var lastname = e.target.lastname.value;
		var pays =e.target.pays.value;
		var ville =e.target.ville.value;
		var email =e.target.email.value;
		//var password =e.target.password.value;
		var rerole = 'member';
		alert(sex);
		var profile={
			username:username,
			firstname:firstname,
			lastname:lastname,
			sex:sex,
			birth:birth,
			pays:pays,
			ville:ville
	
		}
		var obj={
			profile:profile
		}
		Meteor.call('editprofile',id,obj);
		Router.go('profileUser');		
	}

});


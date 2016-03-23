Template.topmenu.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
		Router.go('/register')

		$('#hhide').fadeIn();
		$('#footer').fadeIn();
		$('#menu').fadeIn();
	}
		   
});
Template.topmenu.helpers({
	profileadmin:function(){
		var userid = Meteor.userId();
		return Meteor.users.find({_id:userid});
		}
});

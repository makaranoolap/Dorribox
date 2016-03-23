
Template.header.helpers({
	profileLog:function(){
		var userid = Meteor.userId();
		return Meteor.users.find({_id:userid});
		}
});

Template.header.events({
	'click .clicksearch': function(e){
		$("#removeclass").fadeIn();
	}
});

Template.header.onRendered(function(){
	$("#removeclass").fadeOut();
	
});
Template.searcheIngin.helpers({
	getImage: function(id){
			var img = images.findOne({_id:id});
			if(img){
				console.log(img.copies.images.key);
				return img.copies.images.key;
			}else{
				return;
			}
		}
});
Template.menu.events({
	'keyup .valuesearch': function(e){
		var data =$(".valuesearch").val();
		Router.go("searchlist");
		var route=[0];
		var url=Session.get('oldcurrent');

		var route = Router.current().route.path(this);
		//Session.set('oldcurrent',route);

		if(url){
			var seachArray=url.indexOf(route);
			if(seachArray>=0){
				var urlseach=url;
			}
			else{
				urlseach=url+';'+route;
			}
			
			var arrurl=urlseach.split(';');
		}
		else{
			url=route;
			var arrurl=url;
		}
		if(!data){
			alert(arrurl[0]);

			Router.go(arrurl[0]);
		}

			Session.set('oldcurrent',arrurl)
			console.log(typeof(arrurl));
			console.log(arrurl);
			
		//var param = Session.get('mcuyrrent');
		//var result = param;
		//console.log('MYCURRENT:'+route);
		
	}

	/*'keyup .valuesearch': function(e){
		var data =$(".valuesearch").val();
		if(data){
			$("#hide").addClass("hiddisplay");
		}else{
			$("#hide").removeClass("hiddisplay");
		}
	}*/
});
Template.mainLayout.onRendered(function(){
	//alert();
	$("#menucall").fadeOut();
	
});

Template.mainLayout.events({
	'click #men_show':function(e){
		//alert();
		$("#menucall").fadeIn();
		$('#men_show').addClass('hide');
		$('#men_hide').removeClass('hide');
	},
	'click #men_hide':function(e){
		//alert();
		$("#menucall").fadeOut();
		$('#men_show').removeClass('hide');
		$('#men_hide').addClass('hide');
	}
});

Template.mainLayout.onRendered(function(){
	//alert();
	$("#a").fadeOut();
	
});
Template.mainLayout.events({
	'click #rang_show':function(e){
		
		$("#a").fadeIn();
		$('#rang_show').addClass('hide');
		$('#rang_hide').removeClass('hide');
	},
	'click #rang_hide':function(e){
		//alert();
		$("#a").fadeOut();
		$('#rang_show').removeClass('hide');
		$('#rang_hide').addClass('hide');
	}
});
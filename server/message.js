Meteor.methods({
	// parent tags
	messages: function(id_achor,id_reseipt,title,text,date){
		var attrmessge ={
			id_achor:id_achor,
			id_reseipt:id_reseipt,
			title:title,
			text:text,
			date:date
		}
		messagessms.insert(attrmessge);
	}
	
});
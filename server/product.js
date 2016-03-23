console.log(process.env.PWD);
Meteor.methods({
	//add products
	addPro: function(title, description, price,point,image,category, status,ratio,tags,attr,priority){
		var attributes={
			title:title,
			description:description,
			price:price,
			point:point,
			image:image,
			category:category,
			status:status,
			ratio:ratio,
			tags:tags,
			attribute:attr,
			priority:priority
		};
		products.insert(attributes);
		console.log("Inserted");
	},
	updatePro: function(id, attributes){
		products.update({_id:id},{$set: attributes});
	},
	deletePro: function(id){
		products.remove(id);
	},
	//publish 
	publishPro: function(id, attr){
		products.update({_id:id},{$set: attr});
	},
	//unpublish 
	unpublishPro: function(id, attr){
		products.update({_id:id},{$set: attr});
	},
	add_review: function(title,comment,grade,user,productid){
		var date=new Date().getTime();
		var attr={
			'title':title,
			'comment':comment,
			'grade':grade,
			'user':user,
			'date':date
		};

		products.update({_id:productid},{ $push: { review: attr } });

	},
	getPath: function(){
		return process.env.PWD;
	},
	commentInsert: function(body, postId) {
    var body = body;
    var postId = postId;
    var user = Meteor.user();
    var att={
      userId: user._id,
      author: user.profile.firstname+' '+user.profile.lastname,
      contentId: postId,
      body: body,
      submitted: new Date()
    };
    Comments.insert(att);
  }
});
/*Meteor.methods({
	addToCart: function(userId,productid,shopid,qty){//DEPRECATED
		var ipAddress=this.connection.clientAddress;
		var attr={
			"ip_address":ipAddress,
			"user":userId,
			"product":productid,
			"shop":shopid,
			"quantity":qty
		};

		cart.insert(attr);
	},

	addtocart: function(obj){
		var ipAddress=this.connection.clientAddress;
		console.log("IP ADDRESS:"+ipAddress);
		obj.ip_address=ipAddress;


		cart.insert(obj);
	},
	
	insertPayment: function(userId,total){
		var attr={
			userId:userId,
			total:total
		};
		payment.insert(attr);
	},
	deleteCart:function(id){
		cart.remove(id);
	},
	udateCartClickAdd:function(id,obj){
		cart.update({productId:id},{$set:obj});
	},
	udateCartSelect:function(id,obj){
		cart.update({_id:id},{$set:obj});
	}
});*/
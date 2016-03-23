Meteor.methods({
	

	addtocart: function(obj){
		var ipAddress=this.connection.clientAddress;
		console.log("IP ADDRESS:"+ipAddress);
		obj.ip_address=ipAddress;


		orderItems.insert(obj);
	},
	
	deleteCart:function(id){
		orderItems.remove(id);
	},
	udateCartClickAdd:function(id,obj){
		orderItems.update({productId:id},{$set:obj});
	},
	udateCartSelect:function(id,obj){
		orderItems.update({_id:id},{$set:obj});
	},
	addOrder:function(order){
		orders.insert(order);
	}
});
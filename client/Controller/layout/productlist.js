Template.productlist.events({
	'click #addtocart': function (e, tpl) { 
	//alert();                              
         var arr=[];                                                             
		e.preventDefault();                                                  
		var id = this._id;
		var getCard=orderItems.find();
			getCard.forEach(function(entry){                                          
			arr.push(entry.productId);
			});//end forEach
			//alert();
			console.log('array:'+arr);
			var searchArray = arr.indexOf(id);
		//alert();
		
		//alert(searchArray);
		//var qty = 1;
		var priceProduct = products.findOne({_id:id}).price;
		var result =orderItems.findOne({productId:id});
		//alert();
		if(result){
			subtotal=result.subtotal;
		}
		var date= new Date();
		alert(date);
		//alert();
			if(searchArray>=0) {                    
			     var priceTotal=Number(priceProduct ) + Number(subtotal);
			     var quantity=priceTotal / Number(priceProduct);
			     var obj = {                                                         
						                                            
						userId: Session.get('userId'),                                     
						quantity: quantity,  
						subtotal: priceTotal,
						date:date                                                 
						//shop: shop,                                                        
						//attribute: attribute                                               
					};                                                                                                                           //
					Meteor.call('udateCartClickAdd',id, obj);   
					
					Router.go('/checkout');      
			                  
				 
			}
			else{
				if (Session.get('userId')) { 
				//alert();                                                                                      //
					var obj = {                                                         
						productId: id,                                            
						userId: Session.get('userId'),                                     
						quantity: 1,  
						subtotal:priceProduct, 
						date:date                                                   
						//shop: shop,                                                        
						//attribute: attribute                                               
					};
					//alert('ok');                                                                                                                           //
					Meteor.call('addtocart', obj);   
					
					Router.go('/checkout');                      
				} else {                                                            
					var newId = Random.id();                                           
					Session.setPersistent('userId', newId);                             
					//var ses=Session.get('userId');                                   
		                                                                      
					var obj = {                                                        
						productId: id,                                           
						userId: Session.get('userId'),                                     
						quantity: 1,
						subtotal:priceProduct, 
						date:date                                                     
						//shop: shop,                                                        
						//attribute: attribute                                               
					};                                                                  
		                                                                 
					Meteor.call('addtocart', obj);
					  
					Router.go('/checkout');                    
				} 
			}
		

	}                                                                    
});         
//=================List Product==============//
Template.productlist.helpers({
	listpro:function(){
		return products.find();
	}
});
Template.productlist.helpers({
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
Template.productlist.helpers({
	countProductLike:function(){

		return favorite.find({userId:Session.get('userId')}).count();
	},
	countProductAll:function(){
		return products.find().count();
	}
})                           
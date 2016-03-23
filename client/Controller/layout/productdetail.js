Template.productdetail.helpers({
	getImage: function(id){
			var img = images.findOne({_id:id});
			if(img){
				console.log(img.copies.images.key);
				return img.copies.images.key;
			}else{
				return;
			}
	},
	getCatname: function(){
		var id = this._id;
		var catid = products.findOne({_id:id}).category;
		return categories.findOne({_id:catid}).title;
	},
	listpro:function(){
		return products.find();
	},
	countProductLike:function(){
		return favorite.find({userId:Session.get('userId')}).count();
	},
	countProductAll:function(){
		return products.find().count();
	},
	quantity:function(){
		return qty = 1;
	}
}); 

Template.productdetail.events({
	'click #addtocart': function (e, tpl) {                               
         var arr=[];                                                             
		e.preventDefault();                                               
		var id = this._id;
		var getCard=orderItems.find();
		getCard.forEach(function(entry){                                          
			arr.push(entry.productId);
		});//end forEach
		console.log('array:'+arr);
		var searchArray = arr.indexOf(id);
		//alert(searchArray);
		//var qty = 1;
		var priceProduct = products.findOne({_id:id}).price;
		var result =orderItems.findOne({productId:id});
		if(result){
			subtotal=result.subtotal;
		}
		var date= new Date();
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
					
					//Router.go('/checkout');      
			}
			else{
				if (Session.get('userId')) { 
				//alert();                                                                                      //
					var obj = {                                                         
						productId: id,                                            
						userId: Session.get('userId'),                                     
						quantity: 1,  
						subtotal: priceProduct,
						date:date                                                    
						//shop: shop,                                                        
						//attribute: attribute                                               
					};                                                                                                                           //
					Meteor.call('addtocart', obj);   
					
					//Router.go('/checkout');                      
				} else {                                                            
					var newId = Random.id();                                           
					Session.setPersistent('userId', newId);                             
					//var ses=Session.get('userId');                                   
		                                                                      
					var obj = {                                                        
						productId: id,                                           
						userId: Session.get('userId'),                                     
						quantity: 1,
						subtotal: priceProduct,
						date:date                                                      
						//shop: shop,                                                        
						//attribute: attribute                                               
					};                                                                  
		                                                                 
					Meteor.call('addtocart', obj);
					  
					//Router.go('/checkout');                    
				} 
			}
	},
	'click #btnDelete':function(e){
		e.preventDefault();
		//alert(this.id);
		var id=this.id;
		Meteor.call('deleteCart',id);
	},
	'change #selectQty':function(e,tpl){
		e.preventDefault();
		var name="select_"+this.id;
		//alert(name);
		var qty=$('[name='+name+']').val();
		var price=this.pricePro;
		var priceC=Number(qty) * Number(price);
		var obj={
			quantity:qty,
			subtotal:priceC
		}
		Meteor.call('udateCartSelect',this.id,obj);
	}                                                             
});         

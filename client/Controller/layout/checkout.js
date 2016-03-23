/*Template.checkout.helpers({
	getImage: function(id){
			var img = images.findOne({_id:id});
			if(img){
				console.log(img.copies.images.key);
				return img.copies.images.key;
			}else{
				return;
			}
	},
	getPro: function(){
		var arr=[];
		var total=0;
		var id=Session.get('userId');
		console.log('USERID:'+id)
		var result=cart.find({userId:id});
		result.forEach(function(item){
			console.log(item.productId);
			var proName = products.findOne({_id:item.productId});
			total+=Number(item.price);

			var obj={
				id:item._id,
				image:proName.image,
				title:proName.title,
				pricePro:proName.price,
				price:item.price,
				quantity:item.quantity
				
			}
			arr.push(obj);
		});
		//console.log(total);
		Session.set('total',total);
		return arr;
	},
	total:function(){
		var discount=10;
		var subTotal=Session.get('total');
		var total=subTotal - discount;
		console.log(total);
		var obj={
			subTotal:subTotal,
			discount:discount,
			total:total
		}
		return obj;
	},
	listpro:function(){
		return products.find();
	}
});
Template.checkout.events({
	'click #addtocart': function (e, tpl) {                               
         var arr=[];                                                             
		e.preventDefault();                                                  
		var id = this._id;
		var getCard=cart.find();
		getCard.forEach(function(entry){                                          
			arr.push(entry.productId);
		});//end forEach
		console.log('array:'+arr);
		var searchArray = arr.indexOf(id);
		//alert(searchArray);
		//var qty = 1;
		var priceProduct = products.findOne({_id:id}).price;
		var result =cart.findOne({productId:id});
		if(result){
			priceCart=result.price;
		}
			if(searchArray>=0) {                    
			     var priceTotal=Number(priceProduct ) + Number(priceCart);
			     var quantity=priceTotal / Number(priceProduct);
			     var obj = {                                                         
						                                            
						userId: Session.get('userId'),                                     
						quantity: quantity,  
						price: priceTotal                                                 
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
						price:priceProduct                                                   
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
						price:priceProduct                                                     
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
			price:priceC
		}
		Meteor.call('udateCartSelect',this.id,obj);

	}                                                             
});*/         
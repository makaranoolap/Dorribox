Template.checkout.helpers({
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
		var arrOderId=[];
		var date= new Date();
		var total=0;
		var id=Session.get('userId');
		console.log('USERID:'+id)
		var result=orderItems.find({userId:id});
		result.forEach(function(item){
			console.log(item.productId);
			var proName = products.findOne({_id:item.productId});
			total+=Number(item.subtotal);

			var obj={
				id:item._id,
				image:proName.image,
				title:proName.title,
				pricePro:proName.price,
				price:item.subtotal,
				quantity:item.quantity
				
			}
			
				//var orderId=item._id
			
			arrOderId.push(item._id);
			arr.push(obj);
		});
		/*var order={
			oderId:arrOderId,
			userId:id,
			total:total,
			date:date
		}
		Meteor.call('addOrder',order);*/
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
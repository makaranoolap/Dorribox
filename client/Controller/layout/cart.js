Template.header.helpers({
	cartView:function(){
		var arr=[];
		var id =Session.get('userId');
		//console.log('UserId:'+id);
		var discount=10;
		var total=0;
		var result=orderItems.find({userId:id});
		result.forEach(function(entry){
			total+=Number(entry.subtotal);
			var data=products.findOne(entry.productId);
			var obj={
				_id:entry._id,
				title:data.title,
				image:data.image,
				price:entry.subtotal
			}
			arr.push(obj);
		});
		var Total=total - discount;
		var obj={
			arr:arr,
			total:Total,
			discount:discount,
			subtotal:total
		}

		return obj;
	}
});
Template.header.helpers({
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
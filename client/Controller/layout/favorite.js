Template.checkout.events({
    //=====Click Favorite and Insert to Collection========//
    'click #unaction':function(e){
        var id=this._id;
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        //diplay like
        $(like).removeClass( 'like' );
        $(unlike).addClass( 'like' );
        if(Session.get('userId')){
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
            }
            else{
                var newId=Random.id();
                Session.setPersistent('userId',newId); 
                 
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                 
            }
    },

    //=====Click UnFavorite and Delete from Collection========//
    'click #action':function(e){
        var id=this._id;
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        //display unlike
        //var text_like=Session.get('like');
        $(unlike).removeClass( 'like' );
        $(like).addClass( 'like' );
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
        
    }
})

    //=====show  Favorite when user read page again ========//
Template.checkout.onRendered(function () {
  var userId=Session.get('userId');
    
    var result=favorite.find({userId:userId});
    //alert(result);
    result.forEach(function(item){
        //alert();
        var id=item.proId;
        //alert(id);
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        $(like).removeClass( 'like' );
        $(unlike).addClass( 'like' );
    });
});
//View Favorite header
Template.header.helpers({
    getFavorite:function(){
        var arr=[];
        var userId=Session.get('userId');
        var result=favorite.find({userId:userId});
        result.forEach(function(item){
            var objPro=products.findOne({_id:item.proId});
            arr.push(objPro);
        });
        return arr;
    }
});

//============page like=============//
Template.productlist.events({
    //=====Click Favorite and Insert to Collection========//
    'click #unaction':function(e){
        var id=this._id;
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        //diplay like
        $(like).removeClass( 'like' );
        $(unlike).addClass( 'like' );
        if(Session.get('userId')){
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
            }
            else{
                var newId=Random.id();
                Session.setPersistent('userId',newId); 
                 
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                 
            }
    },

    //=====Click UnFavorite and Delete from Collection========//
    'click #action':function(e){
        var id=this._id;
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        //display unlike
        //var text_like=Session.get('like');
        $(unlike).removeClass( 'like' );
        $(like).addClass( 'like' );
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
        
    }
})

    //=====show  Favorite when user read page again ========//
Template.productlist.onRendered(function () {
  var userId=Session.get('userId');
    
    var result=favorite.find({userId:userId});
    //alert(result);
    result.forEach(function(item){
        //alert();
        var id=item.proId;
        //alert(id);
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        $(like).removeClass( 'like' );
        $(unlike).addClass( 'like' );
    });
});
//Template ProductDetail
Template.productdetail.events({
    //=====Click Favorite and Insert to Collection========//
    'click #unaction':function(e){
        var id=this._id;
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        //diplay like
        $(like).removeClass( 'like' );
        $(unlike).addClass( 'like' );
        if(Session.get('userId')){
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
            }
            else{
                var newId=Random.id();
                Session.setPersistent('userId',newId); 
                 
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                 
            }
    },

    //=====Click UnFavorite and Delete from Collection========//
    'click #action':function(e){
        var id=this._id;
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        //display unlike
        //var text_like=Session.get('like');
        $(unlike).removeClass( 'like' );
        $(like).addClass( 'like' );
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
        
    }
})

    //=====show  Favorite when user read page again ========//
Template.productdetail.onRendered(function () {
  var userId=Session.get('userId');
    
    var result=favorite.find({userId:userId});
    //alert(result);
    result.forEach(function(item){
        //alert();
        var id=item.proId;
        //alert(id);
        var unlike='#unlike_'+id;
        var like='#like_'+id;
        $(like).removeClass( 'like' );
        $(unlike).addClass( 'like' );
    });
});


Template.message.events({
	'click #btnAdd': function(e){
        e.preventDefault();
        var ms_mesages;
        var id_achor = Meteor.userId();
        var id_reseipt =this._id;
        alert(id_reseipt);
        var title =$("#title").val();
        var text =$("#text").val();
        var date = new Date();
        if(title =="" || text==""){
            alert();
            $('#hhh').html( "pleas input all fild");
        }else{
            $('#hhh').fadeOut();
             Meteor.call("messages",id_achor,id_reseipt,title,text,date);
             alert("access");
            var title =$("#title").val("");
            var text =$("#text").val("");
        }
        
	}
});
Template.message.helpers({
    getuser:function(){
        var user=users.find();
        return user;
    }
});
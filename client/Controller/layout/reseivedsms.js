
Template.reseivedsms.helpers({
    getmessage:function(){
        var sms = messagessms.find({id_reseipt:Meteor.userId()});
        var arr=[];
        sms.forEach(function(item){
            var result =users.findOne({_id:item.id_achor});
            obj ={
                sender:result.profile.username,
                title:item.title,
                text:item.text
            }
            arr.push(obj);
        });
        return arr;
    }
});
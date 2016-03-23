Template.profile.helpers({
	getquestion:function(){
		return question.find({});
	},
	getAnswer: function(question_id){
		var userId=Meteor.userId();
		//console.log("userId: "+userId);
		var answer=users.find({"_id":userId,"answerdata.qcmId":question_id},{fields:{"answerdata":1}});
		//console.log("res:"+answer.fetch()[0].answerdata.length);
		//console.log(answer.fetch()[0]);
		if(answer.fetch().length==0)
			return "";
		else{
			var ret="";
			for(var i=0;i<answer.fetch()[0].answerdata.length;i++){
				//console.log("current answer="+answer.fetch()[0].answerdata[i].answer+" / "+answer.fetch()[0].answerdata[i].qcmId);
				if(answer.fetch()[0].answerdata[i].qcmId==question_id)
					ret=answer.fetch()[0].answerdata[i].answer;
			}
				
			//console.log("ret="+ret);
			return ret;
		}
	}
})
Template.question.events({
	'submit form':function(e){
		e.preventDefault();
		var txtQuestion = e.target.question.value;
		

		var textQ={
			txtQuestion:txtQuestion,
			parentsAnswer:"null"
		}
		var txtQuestion = e.target.question.value="";
		Meteor.call('insertQuestion',textQ);
		Router.go('listQuestion');
		//alert('ok');
		
	}
});
Template.listQuestion.helpers({
	getQuestion:function(){
		return question.find();
	}
});
Template.listQuestion.events({
	'click #edit':function(e){
		//alert();
		e.preventDefault();
		var id= this._id;
		alert(id);
		Session.set('id',id);
		Router.go('editQuestion');
	},
	'click #remove':function(e){
		//alert('ok');
		var id=this._id;
		Meteor.call('deleteQuestion',id);
	}
});
Template.editQuestion.helpers({
	getOneQuestion:function(){
		var id=Session.get('id');
		console.log(id);
		return question.findOne({_id:id}).txtQuestion;
	}
});
Template.editQuestion.events({
	'submit form':function(e){
		e.preventDefault();
		var id=Session.get('id');
		var txtQuestion = e.target.question.value;
		alert(txtQuestion);
		var obj={
		 	txtQuestion:txtQuestion
		}
		Meteor.call('editQuestion',id,obj);
		Router.go('listQuestion');
	}
});
Template.question.rendered=function() {
    $('#my-datepicker').datepicker();
}
Template.question.events ({           
         'focus #datepicker': function () {
              $('#my-datepicker').datepicker({
                format: 'M dd, yyyy',
                autoclose: true
               })
            console.log('#my-datepicker has focus');
         }
    });

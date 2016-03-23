Template.answer.helpers({
	getQuestion:function(){
		return question.find();
	}
});
Template.answer.events({
	'submit form':function(e){

		var arrayAnswer=[];
		var arrayQid=[];
		var arraytagId=[];
		e.preventDefault();
		var parenttags = getTag;
		//var answer = e.target.answer.value;
		$('.answer').each(function(){
			var value=$(this).val();
			arrayAnswer.push(value);
			//alert(value);
		});
		$('.qId').each(function(){

			var Qid=$(this).val();
			arrayQid.push(Qid);
			//alert(value);
		});
		for(var i=0;i<arrayQid.length;i++){
			var j=i;
			var getTag= tags.find();
			getTag.forEach(function(item){
				arraytagId.push(item._id);
			});


			var obj={
				 parent_question:arrayQid[i],
				 text:arrayAnswer[j],
				 tagId:arraytagId
			}
			Meteor.call('inserAnser',obj);
			$('.answer').each(function(){
			$(this).val(' ');
			
			});
			//alert('successfully');
		}	
	}
});
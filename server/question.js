Meteor.startup(function(){
  if (question.find().fetch().length === 0) {
      question.insert({
        name:'Can my teacher move me to another college with out my permission. Is it illegal?' 
      }),
      question.insert({
        name: 'What if dogs could see more colors?(other than the colors they can see already)?'
      }),
      question.insert({
        name: 'Why do people bully me?'
      }),
       question.insert({
        name: 'Why do people still bother with science when religion is obviously right ?'
      }),
       question.insert({
        name: 'Why do people feel shy?'
      }),
       question.insert({
        name: 'Do you like Hannah Montana?'
      })
    }
});
Meteor.methods({
  insertQuestion:function(textQ){
      var textQ1={
      txtQuestion:textQ
    }
    question.insert(textQ);
  },
  editQuestion:function(id,obj){
    question.update({_id:id},{$set:obj});
  },
  deleteQuestion:function(id){
    question.remove(id);
  },
  inserAnser:function(obj){
    answer.insert(obj);
  }
});
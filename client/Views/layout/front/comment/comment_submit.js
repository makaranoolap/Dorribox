Template.commentSubmit.onCreated(function() {
  Session.set('commentSubmitErrors', {});
});

Template.commentSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('commentSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();
    var body = $("#body").val();
    var postId = template.data._id;
    var errors = {};
    if (! body) {
      errors.body = "Please write some content";
      return Session.set('commentSubmitErrors', errors);
    }
    
    Meteor.call('commentInsert', body, postId, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $("#body").val('');
      }
    });
  }
});
Template.productdetail.helpers({
    getuser: function (id){
        var users = Meteor.users.findOne({_id:id});
        return users.profile.firstname+' '+users.profile.lastname
    }
});
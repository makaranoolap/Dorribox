/*Template.commentItem.helpers({
  submittedText: function() {
    return this.submitted.toString();
  }
});*/
Template.productdetail.helpers({
  comments: function() {
    return Comments.find({contentId: this._id});
  },
  submittedText: function() {
    return this.submitted.toString();
  }
});
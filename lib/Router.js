Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/',{
    name:'home'
});
Router.route('/searcheIngin',{
    name:'searcheIngin'
});
Router.route('productlist',{
    name:'productlist'
});
Router.route('/products',{
    name:'products'
});
// admin Products
Router.route('/manageproduct',{
	name:'manageproduct'
});
Router.route('/addproduct',{
	name:'addproduct'
});

Router.route('/updateproduct/:_id',{
	name: 'updateproduct',
	data: function(){
        var id = this.params._id;
        var da = products.findOne({_id: id });
		return da;
    }
});
// admin categories
Router.route('/managecategory',{
	name: 'managecategory'
});
Router.route('/addcategory',{
	name: 'addcategory'
	
});

Router.route('/listing2',{
    name: 'listing2'
    
});
Router.route('/updatecategory/:_id',{
	name: 'updatecategory',
	data: function(){
        var id = this.params._id;
        var da = categories.findOne({_id: id });
		return da;
    }
});
// shop
Router.route('/manageshop',{
	name:'manageshop'
});

Router.route('/shopdetail/:id',{
	name:'shopdetail',
	data: function(){
        var id = this.params.id;
        var da = shops.findOne({_id: id });
		return da;
    }
});

Router.route('/updateshop/:_id',{
	name: 'updateshop',
	data: function(){
        var id = this.params._id;
        var da = shops.findOne({_id: id });
		return da;
    }
});

// parent tags
Router.route('/manageparenttag',{
		name:'manageparenttag'
});
Router.route('/updateparenttag/:_id',{
		name:'updateparenttag',
		data: function(){
			var id = this.params._id;
			var result = parent_tags.findOne({_id: id});
			return result;
		}
});
// tags
Router.route('/managetag',{
		name:'managetag'
});

// tags
Router.route('/search',{
		name:'search'
});

Router.route('/category/:id',{
        name:'listing',
        data: function() {
        return categories.findOne({_id: this.params.id});
    }
});

//Parent Attribute
Router.route('/parentattr', {
    name: 'parentattr',
    
});

Router.route('/editparentattr/:_id', {
    name: 'editparentattr',
    data: function() {
        return parentattr.findOne({_id: this.params._id});
    },

    
});
//Attribute
Router.route('/attribute', {
    name: 'attribute',
    
});
Router.route('/editattr/:_id', {
    name: 'editattr',
    data: function() {
        var attr= attribute.findOne({_id: this.params._id});
        Session.setPersistent('id',attr.productImage);//store field productImage to use in helper to get file dispay
        Session.setPersistent('attrId',this.params._id);//store id attribute to use delete file
        var id =attr.parentId;
        var parent=parentattr.findOne({_id:id})
        Session.setPersistent('parentID',parent._id);//store id parent attribute to find where not equal parentId
        var dataAll={
            attr:attr,
            parent:parent
        }
        return dataAll;
    }

    
});
Router.route('/recommendation', {
    name: 'recommendation',
    
});

Router.route('/details/:id', {
    name: 'details',
    data: function() {
        return products.findOne({_id: this.params.id});
    }
    
});
/**=== Chantern ===**/
Router.route('/login', {
    name: 'login'
});
// register
Router.route('/register', {
    name: 'register'
});
Router.route('/contents', {
    name: 'contents'
});
Router.route('/contenmember', {
    name: 'contenmember'
});
Router.route('/lestsidenews', {
    name: 'lestsidenews'
});
Router.route('/contennews', {
    name: 'contennews'
});
Router.route('/contentuto', {
    name: 'contentuto'
});
Router.route('/contenttype', {
    name: 'contenttype'
});
Router.route('/updatenewcontent/:_id', {
    name: 'updatenewcontent',
    data: function(){
        var id = this.params._id;
        var da =contents.findOne({_id: id });
        return da;
    }
});
// Address
Router.route('/address', {
    name: 'address'
    
});
Router.route('/addaddress', {
    name: 'addaddress'
    
});
Router.route('/address/view/:_id', {
    name: 'viewaddress',
    data: function() {
        return address.findOne({_id: this.params._id});
    },  
});
Router.route('/updateaddress/edit/:_id', {
    name: 'updateaddress',
    data: function() {
       return address.findOne({_id: this.params._id});
    },  
});

// favorite
Router.route('/listpro', {
    name: 'listpro',
    
});
//mange Role userrs
Router.route('/managerole',{
        name:'manageRole'
});
Router.route('/updateuser/:id', {
    name: 'updateuser',
    data: function() {
        return Meteor.users.findOne({_id: this.params.id});
    }
    
});
//profile
Router.route('/profile', {
    name: 'profile' 
});
Router.route('/editprofile', {
    name: 'editprofile'  
});

Router.route('/journey', {
    name: 'journey'  
});
Router.route('/linkselling', {
    name: 'linkselling'  
});
//contacts
Router.route('/contact', {
    name: 'contact'  
});
//choose box
Router.route('choosebox1',{
    name: 'choosebox1'
});
Router.route('/checkout',{
    name: 'checkout'
});
Router.route('/admin',{
    name: 'admin'
});

Router.route('/message',{
    name: 'message'
});
Router.route('/reseivedsms',{
    name: 'reseivedsms'
});

Router.route('/productdetail/:_id',{
    name: 'productdetail',
    data: function(){
        var id = this.params._id;
        var da = products.findOne({_id: id });
        return da;
    }
});
Router.route('/userProfile',{
     name:'userProfile'
});

Router.route('/question',{
    name:'question'
});
Router.route('editQuestion',{
    name:'editQuestion'
});
Router.route('/listQuestion',{
    name:'listQuestion'
});
Router.route('/answer',{
    name:'answer'
});

Router.route('/profileUser',{
    name:'profileUser'
});
Router.route('/editProfile1',{
    name:'editProfile1'
});
Router.route('/package',{
    name:'package'
});
Router.route('/menucall',{
    name:'menucall'
});
Router.route('/reangeMenu',{
    name:'reangeMenu'
});
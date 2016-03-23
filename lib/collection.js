
products = new Meteor.Collection('products');// collection products
//users.initEasySearch('username');// easy search by title
categories = new Meteor.Collection('categories');// collection categories
shops = new Meteor.Collection('shops');
parent_tags = new Meteor.Collection('parent_tags');
tags = new Meteor.Collection('tags');
stats = new Mongo.Collection('stats');
images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path:"D:/Noolab1/cm-project/DorriBox/public/upload"})]
});

attribute = new Mongo.Collection('attribute');
parentattr = new Mongo.Collection('parentattr');
users = Meteor.users;
cart=new Mongo.Collection('cart');
contents = new Meteor.Collection('contents');
contents_type = new Meteor.Collection('contents_type');
address = new Mongo.Collection('address');
favorite = new Mongo.Collection('favorite');
question = new Mongo.Collection('question');
answer = new Mongo.Collection('answer');
journey=new Mongo.Collection('journey');//added by djisse
linkselling=new Mongo.Collection('linkselling');//added by djisse
orderItems=new Mongo.Collection('orderItems');
orders=new Mongo.Collection('orders');

messagessms=new Mongo.Collection('messagessms');

  PlayersIndex = new EasySearch.Index({
    collection: products,
    fields: ['title'],
    engine: new EasySearch.MongoDB()

  });

Comments=new Mongo.Collection('Comments');

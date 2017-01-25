Meteor.publish('products', function(){
	return Products.find({author: this.userId})
});
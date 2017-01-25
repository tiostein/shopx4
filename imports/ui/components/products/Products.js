
/*
Products = new Meteor.Collection('products');

ProductsSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	description: {
		type: String,
		label: "Description"
	},
	Author: {
		type: String,
		label: "Author"
		autoValue: function(){
			return this.userId
		}
	},
	createdAt: {
		type: Date,
		label: "Created At"
		autoValue: function(){
			return new Date()
		}
	}
});

Products.attachSchema( ProductsSchema );
*/
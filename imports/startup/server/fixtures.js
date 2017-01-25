// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Home',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Shop',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Cart',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Account',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
});

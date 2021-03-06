import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

it('render user name', () => {
  const user = {
    name: 'sid',
    location: 'SF',
    handle: 'sidg_sid',
    description: 'follow the universe',
    favourites_count: 200,
    followers_count: 300,
    friends_count: 100,
    tweets: {
      items: [
        {
          tweet: 'this is my first tweet',
          tweet_id: '123',
        },
      ],
    },
  };
  const wrapper = shallow(<User user={user} />);
  expect(wrapper.html()).toContain(user.description);
});

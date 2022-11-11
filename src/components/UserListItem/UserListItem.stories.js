import React from 'react';

import UserListItem from './UserListItem';

export default {
  title: 'Example/UserList/UserListItem',
  component: UserListItem,
};

const Template = (args) => <UserListItem {...args} />;

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  user: {
    name: 'Michał Went',
    attendance: '84%',
    average: '5.0',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  user: {
    name: 'Michał Went',
    attendance: '54%',
    average: '3.4',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  user: {
    name: 'Michał Went',
    attendance: '24%',
    average: '2.0',
  },
};

export const NoGrades = Template.bind({});
NoGrades.args = {
  user: {
    name: 'Michał Went',
    attendance: '24%',
    average: '',
  },
};

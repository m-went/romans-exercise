import React from 'react';

import UserListAverage from './UserListAverage';

export default {
  title: 'Example/UserList/UserListAverage',
  component: UserListAverage,
  parameters: {
    average: '3.4',
  },
};

const Template = (args) => <UserListAverage {...args} />;

export const GoodAverage = Template.bind({});
GoodAverage.args = {
  average: '5.0',
};

export const MediumAverage = Template.bind({});
MediumAverage.args = {
  average: '3.4',
};

export const BadAverage = Template.bind({});
BadAverage.args = {
  average: '2.0',
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  average: '',
};

import Modal from './Modal';

export default {
  title: 'Example/Modal/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  chosenUser: {
    name: 'Michał Went',
    attendance: '84%',
    average: '5.0',
  },
};

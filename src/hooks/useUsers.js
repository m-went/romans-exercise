import axios from 'axios';

function useUsers() {
  const getGroups = async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  };

  const getUsers = async (id) => {
    try {
      const result = await axios.get(`/students/${id}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  };

  const findUsers = async (searchPhrase) => {
    try {
      const { data } = await axios.post('/searchUsers', {
        body: searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getGroups,
    getUsers,
    findUsers,
  };
}

export default useUsers;

import axios from 'axios';
import { useCallback } from 'react';

function useUsers() {
  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups');
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getUsers = useCallback(async (id) => {
    try {
      const result = await axios.get(`/group/${id}`);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findUser = async (userId) => {
    try {
      const result = await axios.get(`/users/${userId}`);
      return result.data;
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
    findUser,
    findUsers,
  };
}

export default useUsers;

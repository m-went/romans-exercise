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

  const findUsers = useCallback(async (searchPhrase) => {
    try {
      const { data } = await axios.post('/searchUsers', {
        body: searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getGroups,
    getUsers,
    findUsers,
  };
}

export default useUsers;

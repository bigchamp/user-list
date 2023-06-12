import baseService from './baseService';

export const getUsers = async () => {
  const res = await baseService.get('?page=3&results=10');
  return res.data?.results;
};

export const getUserById = async (id: string) => {
  const res = await baseService.get(`/?id=${id}`);
  return res.data?.results[0];
};

export const deleteUser = async (id: number) => {
  const res = await baseService.delete(`/groceries/${id}`);
  return res.data;
};

export const postUser = async (data: any) => {
  const res = await baseService.post('/groceries', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.data;
};

export const putUser = async (data: any) => {
  const res = await baseService.put(`/groceries/${data.id}`, data);
  return res.data;
};

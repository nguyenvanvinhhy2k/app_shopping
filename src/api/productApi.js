import axiosClient from "./axiosClient";

const productApi = {
  getAll(params) {
    const url = "/Product/getAll";
    return axiosClient.get(url, params);
  },
  get(id) {
    const url = `/Product/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/Product";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/Product/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/Product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;

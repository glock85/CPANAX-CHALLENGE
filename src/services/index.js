import axios from "./api";

export const api = {
  products: {
    getProducts: (params) => axios.get("/products", params),
    getProduct: (id) => axios.get(`/products/${id}`),
  },
  users: {
    getUsers: (params) => axios.get("/users", params),
    getUser: (id) => axios.get(`/users/${id}`),
  }
};

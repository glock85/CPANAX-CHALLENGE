const interceptorSuccess = (response) => {
  return response.data;
};

const interceptorErrors = async (error) => {
  if (error.response) {
    alert(error.response.data.message);
  }

  return Promise.reject(error);
};

export { interceptorSuccess, interceptorErrors };

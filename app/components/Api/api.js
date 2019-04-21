const config = {
  baseUrl: 'http://95.46.44.18:8080/api/v1',
};

class Api {
  signup = (email, password, repeatPassword) => {
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    formData.append('repeat_password', repeatPassword);
    formData.append('account_number', 1);

    return fetch(`${config.baseUrl}/authorization/register`, {
      method: 'POST',
      body: formData,
    });
  };

  login = (email, password) => {
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    return fetch(`${config.baseUrl}/authorization/login`, {
      method: 'POST',
      body: formData,
    });
  };

  signout = () => true;

  // isAuthenticated = () => ({
  //   user_id: 44,
  //   access_token:
  //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0NCwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYiLCJqdGkiOjQ0LCJleHAiOjE1NTAxNzEzMjN9.uJqXuPl-fKNCh0OMIYx2LCoVyt2rbOrZ-_BrjOYvYTs',
  //   exp: 1550171323,
  //   refresh_token:
  //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0NCwiZXhwIjoxNTUxNzYzMzIzfQ.dtEYf7Nfi-ZfZ_AomAsrU6XiYEdX7Yzg5Y_wgXr-UZQ',
  // });

  isAuthenticated = () => null;
}

export default Api;

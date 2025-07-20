/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateUserSettings = async (data, type) => {
  //   console.log(email, password);
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updatepassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateme';

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status == 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
      //   window.setTimeout(() => {
      //     location.assign('/');
      //   }, 1500);
    }
    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
    // console.log(err.response.data);
  }
};

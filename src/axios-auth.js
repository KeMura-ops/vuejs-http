import axios from 'axios';

// 新しいaxiosのインスタンスを生成する
const instance =  axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
});

export default instance;
import axios from 'axios';

// 新しいaxiosのインスタンスを生成する
const instance =  axios.create({
  baseURL: 'https://securetoken.googleapis.com/v1'
});

export default instance;
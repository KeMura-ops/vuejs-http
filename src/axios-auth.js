import axios from 'axios';

// 新しいaxiosのインスタンスを生成する
const instance =  axios.create({
  baseURL: 'https://firestore.googleapis.com/v1/projects/vuejs-http-c2a1a/databases/(default)/documents'
});

export default instance;
import { Platform, AsyncStorage, } from 'react-native';
import { IOS_LXY_KEY, ANDROID_LXY_DKEY, } from '../../app/constants/apiConfig';
import { hexMD5, } from './md5';
import { sortObject, setUrlK, formData, } from './util';
import { appid, platform, } from '../../app/constants/urls';

const signKey = Platform.OS === 'android' ? ANDROID_LXY_DKEY : IOS_LXY_KEY;

const GUID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

const throwError = json => {
  const error = new Error(json.code);
  error.message = json.msg;
  error.code = json.code;
  throw error;
};

const checkStatus = ({ resp, json, }) => {
  // 如果 返回结果中包含 code 和 message, 则认为出错了
  if (resp.status >= 200 && resp.status < 300) {
    return json;
  } else if (resp.status >= 500) {
    throwError(json);
  } else {
    throwError(json);
  }

  return json;
};

const encodeQuery = (path, data = {}) => {
  let url = path;
  if (!data || !Object.keys(data).length) {
    return url;
  }

  url = url.indexOf('?') === -1 ? `${url}?` : `${url}&`;

  const query = Object.keys(data)
    .map(key => `${key}=${data[key]}`)
    .join('&');

  return `${url}${query}`;
};
// 这个方法是做接口签名用的，如果你的项目中需要对接口做签名直接改一下 IOS_LXY_KEY, ANDROID_LXY_DKEY的值就行，
const signMd = (pKey, data) => {
  const __data = JSON.parse(JSON.stringify(data));
  const sign_data = {
    ...data,
    ...data.signs,
  };
  delete __data.signs;
  delete sign_data.signs;
  __data.sign = hexMD5(pKey + decodeURIComponent(setUrlK(sortObject(sign_data)))).toUpperCase();
  return __data;
};


// get token
const getToken = async () => {
  const users = await AsyncStorage.getItem('users');
  if (users) {
    const __users = JSON.parse(users);
    return __users.token ? __users.token : null;
  }
  return null;
};


const FETCH = async (url, options, noHeaders = false) => {
  const { headers, ...others } = options;
  const __token = await getToken();
  let combineHeaders = { ...headers, };
  if (!noHeaders) {
    combineHeaders = { 'X-Request-Id': GUID(), ...headers, };
  }
  if (__token) {
    combineHeaders['Request-Token'] = __token;
  }

  console.log('请求头信息:', combineHeaders);
  console.log('请求地址:', url, '请求信息:', others);
  return fetch(url, {
    credentials: 'include',
    ...others,
    headers: combineHeaders,
  })
    .then(resp =>
      resp
        .json()
        .then(json => ({ resp, json, }))
        .catch(error => ({ resp, json: {}, error, })),
    )
    .then(checkStatus);
};

const POST = (url, data = {}, options = {}) => {
  const dataCopy = { appid, platform, ...data, };
  const __signParam = signMd(signKey, dataCopy);
  const __formData = formData(__signParam);
  return FETCH(url, {
    method: 'POST',
    headers: {
      "Content-Type": "multipart/form-data",
      Connection: "close",
	    type: "getUserData",
    },
    body: __formData,
    ...options,
  })
    .then(resp => {
      return resp;
    })
    .catch(error => {
      return error;
    });
};

const GET = (url, data = {}, options = {}) => {
  const dataCopy = { appid, platform, ...data, };
  const __signParam = signMd(signKey, dataCopy);
  const requestUrl = encodeQuery(url, __signParam);
  return FETCH(requestUrl, {
    method: 'GET',
    contentType: 'application/json',
    ...options,
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error;
    });
};

module.exports = {
  POST,
  GET,
};

import { Platform, } from 'react-native';
import { IOS_LXY_KEY, ANDROID_LXY_DKEY, } from '../../app/constants/apiConfig';
import { hexMD5, } from './md5';
import { sortObject, setUrlK, } from './util';
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

const signMd = (pKey, data) => {
  const __data = JSON.parse(JSON.stringify(data));
  const sign_data = {
    ...data,
    ...data.signs,
  };
  delete __data.signs;
  delete sign_data.signs;
  __data.sign = hexMD5(pKey + decodeURIComponent(setUrlK(sortObject(sign_data)))).toUpperCase();
  return JSON.stringify(__data);
};


const FETCH = (url, options, noHeaders = false) => {
  const { headers, body, ...others } = options;

  const __body = {
    appid,
    platform,
    ...body,
  };

  const __signParam = signMd(signKey, __body);
  const __others = { ...others, ...{ body: __signParam, }, };
  let combineHeaders = { ...headers, };
  if (!noHeaders) {
    combineHeaders = { 'X-Request-Id': GUID(), ...headers, };
  }
  console.log('请求地址:', url, '请求信息:', __others);
  return fetch(url, {
    credentials: 'include',
    ...__others,
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
  const dataCopy = { ...data, };

  return FETCH(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: dataCopy,
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
  const requestUrl = encodeQuery(url, data);
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

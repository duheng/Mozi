import cache from 'utils/cache';

function GUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function encodeQuery(path, data = {}) {
  let url = path;
  if (!data || !Object.keys(data).length) {
    return url;
  }

  url = url.indexOf('?') === -1 ? `${url}?` : `${url}&`;

  const query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');

  return `${url}${query}`;
}

export function decodeQuery(query) {
  let url = query;
  const ind = url.indexOf('?');
  const hashInd = url.indexOf('#');

  if (hashInd !== -1) {
    url = url.slice(0, hashInd);
  }

  if (ind !== -1) {
    url = url.slice(ind + 1);
  }

  if (url.length) {
    // decodeURI and remove '?'
    const search = decodeURIComponent(url);

    // extract key=value and join into { key: value }
    return search.split('&').reduce((prev, current) => {
      const [key, value] = current.split('=');
      return { ...prev, [key]: value };
    }, {});
  }

  return {};
}

function throwError(json) {
  const error = new Error(json.code);
  error.message = json.msg;
  error.code = json.code;

  throw error;
}

function checkStatus({ resp, json }) {
  // 如果 返回结果中包含 code 和 message, 则认为出错了
  if (resp.status >= 200 && resp.status < 300) {
    return json;
  } else if (resp.status >= 500) {
    throwError(json);
  } else {
    throwError(json);
  }

  return json;
}

function FETCH(url, options, noHeaders = false) {
  let { headers, ...others } = options;
  if (!noHeaders) {
    headers = { 'X-Request-Id': GUID(), ...headers };
  }

  return fetch(url, { credentials: 'include', ...others, headers })
    .then(resp =>
      resp
        .json()
        .then(json => ({ resp, json }))
        .catch(error => ({ resp, json: {}, error })))
    .then(checkStatus);
}

export function GET(url, data = {}, options = {}) {
  let useCache = false;
  let dataCopy = { ...data };

  if (!dataCopy.cache) {
    dataCopy = { ...data, _: Date.now() };
  } else {
    useCache = true;
    // delete _data.cache
  }

  const requestUrl = encodeQuery(url, data);

  const cacheData = useCache && cache.get(requestUrl);
  if (cacheData) {
    return new Promise(resolve => resolve(cacheData));
  }

  return FETCH(requestUrl, {
    method: 'GET',
    contentType: 'application/json',
    ...options,
  })
    .then(res => {
      if (useCache) {
        cache.set(requestUrl, res);
      }
      return res;
    })
    .catch(error => {
      throw error;
    });
}

export function POST(url, data = {}, options = {}) {
  const dataCopy = { ...data, _: Date.now() };

  return FETCH(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataCopy),
    ...options,
  })
    .then(resp => {
      return resp;
    })
    .catch(error => {
      throw error;
    });
}

export default {
  GET,
  POST,
  decodeQuery,
  encodeQuery,
};

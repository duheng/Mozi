function GUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

function throwError(json) {
  const error = new Error(json.code)
  error.message = json.msg
  error.code = json.code
  throw error
}

function checkStatus({ resp, json }) {
  // 如果 返回结果中包含 code 和 message, 则认为出错了
  if (resp.status >= 200 && resp.status < 300) {
    return json
  } else if (resp.status >= 500) {
    throwError(json)
  } else {
    throwError(json)
  }

  return json
}

function encodeQuery(path, data = {}) {
  let url = path
  if (!data || !Object.keys(data).length) {
    return url
  }

  url = url.indexOf("?") === -1 ? `${url}?` : `${url}&`

  const query = Object.keys(data)
    .map(key => `${key}=${data[key]}`)
    .join("&")

  return `${url}${query}`
}

function FETCH(url, options, noHeaders = false) {
  const { headers, ...others } = options
  let combineHeaders = { ...headers }
  if (!noHeaders) {
    combineHeaders = { "X-Request-Id": GUID(), ...headers }
  }

  return fetch(url, {
    credentials: "include",
    ...others,
    headers: combineHeaders,
  })
    .then(resp =>
      resp
        .json()
        .then(json => ({ resp, json }))
        .catch(error => ({ resp, json: {}, error })),
    )
    .then(checkStatus)
}

export function POST(url, data = {}, options = {}) {
  const dataCopy = { ...data, _: Date.now() }

  return FETCH(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataCopy),
    ...options,
  })
    .then(resp => {
      return resp
    })
    .catch(error => {
      return error
    })
}

export function GET(url, data = {}, options = {}) {
  const requestUrl = encodeQuery(url, data)
  console.log("requestUrl", requestUrl)
  return FETCH(requestUrl, {
    method: "GET",
    contentType: "application/json",
    ...options,
  })
    .then(res => {
      return res
    })
    .catch(error => {
      throw error
    })
}

export default {
  POST,
  GET,
}

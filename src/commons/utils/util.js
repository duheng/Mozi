const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${year}-${month}-${day}`;
};

const sortObject = (obj) => {
  // 先获取所有属性名
  const keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  // 排序
  keys.sort();
  // 导出新的对象
  const r = {};
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    r[key] = typeof (obj[key]) === "object" ? JSON.stringify(obj[key]) : obj[key];
  }
  return r;
};

const setUrlK = (ojson) => {
  let s = '',
    name,
    key;
  for (const p in ojson) {
    if (ojson.hasOwnProperty(p)) { name = p; }
    key = ojson[p];
    s += `&${name}=${encodeURIComponent(key)}`;
  }
  return s.substring(1, s.length);
};

const onlyOnes = (data, limitkey) => { // 去重
  const __data = JSON.parse(JSON.stringify(data));
  if (__data.length <= 1) {
    return __data;
  }
  const arr = [];
  for (const val of __data) {
    arr.push(val[limitkey]);
  }
  const newArr = [];
  const newArr2 = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
      newArr2.push(__data[i]);
    }
  }

  return newArr2;
};

const compareVersion = (v1, v2) => {
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};

const formData = (data) => {
  const __formData = new FormData();
  for (const k in data) {
    __formData.append(k, data[k]);
  }
  return __formData;
};

module.exports = {
  formatTime,
  sortObject,
  setUrlK,
  onlyOnes,
  compareVersion,
  formData,
};

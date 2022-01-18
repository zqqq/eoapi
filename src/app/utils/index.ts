export const uuid = (): string => Math.random().toString(36).slice(-8);

export const addEnvPrefix = (prefix, uri) => {
  // * 需要先判断uri是否已经包含 http:// 前缀
  if (prefix == null) {
    return uri;
  }
  const hasPrefix = /(http|https):\/{2}.+/.test(uri);
  if (hasPrefix) {
    return uri;
  }
  // * 添加前缀
  return prefix + uri;
};

// const DOMAIN_REGEX =
//   '(^((http|wss|ws|ftp|https)://))|(^(((http|wss|ws|ftp|https)://)|)(([\\w\\-_]+([\\w\\-\\.]*)?(\\.(' +
//   DOMAIN_CONSTANT.join('|') +
//   ')))|((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))|(localhost))((\\/)|(\\?)|(:)|($)))';

export const whatType = (data: any): string => {
  if (data === undefined) {
    return 'undefined';
  }
  if (data === null) {
    return 'null';
  }
  if (data instanceof Array) {
    return 'array';
  }
  if (data instanceof Object) {
    return 'object';
  }
  if (typeof data === 'string') {
    return 'string';
  }
  if (typeof data === 'number') {
    return 'number';
  }
  if (typeof data === 'boolean') {
    return 'boolean';
  }
  return 'unknown';
};

export const whatRootType = (tmpText) => {
  // TODO it can be better
  const tmpCompareText = tmpText.replace(/\s/g, '');
  if (/^({|\[)(.*)(}|])$/.test(tmpCompareText) && JSON.parse(tmpCompareText)) {
    return 'json';
  } else if (/^(<)(.*)(>)$/.test(tmpCompareText)) {
    if (/^(<!DOCTYPEhtml>)|(html)/i.test(tmpCompareText)) {
      return 'html';
    } else {
      return 'xml';
    }
  } else {
    return 'text';
  }
};
/**
 * reverse object key and value
 * @param obj
 */
export const reverseObj = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});
};
/**
 * reverse object key and value
 * @param obj
 */
export const objectToArray = (obj) => {
  return Object.keys(obj).map((val) => ({
    key: val,
    value: obj[val],
  }));
};
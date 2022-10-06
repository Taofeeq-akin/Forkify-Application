// Will add functions that are reuseble

import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json(); // to get data from fetch api and store it to the variable
    // console.log(res, data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data; // will be the resolved value that getJSON function returns
  } catch (err) {
    throw err;
  }
};

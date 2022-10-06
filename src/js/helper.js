// Will add functions that are reuseble

import { async } from 'regenerator-runtime';

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json(); // to get data from fetch api and store it to the variable
    // console.log(res, data);

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

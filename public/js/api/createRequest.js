const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const {url, method, callback, data} = options;
  formData = new FormData();

  if (method === 'GET') {
    for (key in data) {
      data[key].includes('@') ? url += `?mail=${data[key]}` : url += `&password=${data[key]}`;
    } 
  } else {
    for (key in data) {
      if (data[key].includes('@')) {
        formData.append('mail', data[key]);
      } else {
        formData.append('password', data[key]);
      }
    }
  }

  try {
    xhr.open(method, url);
    (formData.get('mail') || (formData.get('password'))) ? xhr.send(formData) : xhr.send();
    xhr.onload = () => {callback(null, xhr.response)}; 
  }
  catch (err) {
    callback(err);
  }

};
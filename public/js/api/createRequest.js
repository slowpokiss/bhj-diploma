const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  const {method, callback, data} = options;
  let url = options['url']
  formData = new FormData();
  
  if (method === 'GET') {
    url += '?'
    for (key in data) {
      url += `${key}=${data[key]}&`  
    }
    url = url.slice(0, -1)
  } else {
    for (key in data) {
      formData.append(key, data[key]);
    }
  }

  xhr.onload = () => {
    callback(null, xhr.response)
  }; 

  try {
    xhr.open(method, url);
    xhr.send(formData);
  } catch (err) {
    callback(err);
  } 
};
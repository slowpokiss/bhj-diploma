/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  if (options['method'] === 'GET') {
    try {
      xhr.open('GET', `${options['url']}?mail=${options['data']['mail']}&password=${options['data']['password']}`);
      xhr.send();
    }
    catch (err) {
      xhr.onload = options['callback'](err, xhr.response); 
    }
    xhr.onload = options['callback'](err = null, xhr.response);   
  } else {
    try {
      formData = new FormData();
    
      formData.append('mail', options['data']['mail']);
      formData.append('password', options['data']['password']);
  
      xhr.open('POST', options['url'] );
      xhr.send(formData);
    }
    catch (err) {
      xhr.onload = options['callback'](err, xhr.response);   
    }    
    xhr.onload = options['callback'](err = null, xhr.response);
  }
};
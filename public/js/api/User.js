/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  static URL = '/user'

  static setCurrent(user) {
    localStorage.setItem('user', user);
  }

  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  static current() {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user');
    } else {
      return undefined;
    }
  }

  static fetch(callback) {

    createRequest({
    method: 'GET',
    url: this.URL + '/current',

    callback: ( err, response ) => {
      if ( response && response.user ) {
        User.setCurrent( response.user );
      }
      callback( err, response );
      }
    })
  }
  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          User.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {
    createRequest({
      url: this.URL + '/register',
      method: 'POST',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {
    createRequest({url: this.URL + '/logout', data, method: 'POST', callback: callback})
  } 
}

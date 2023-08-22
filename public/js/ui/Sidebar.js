/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sideBtn = document.querySelector('.sidebar-toggle');
    const body = document.body;
    sideBtn.onclick = (ev) => {
      ev.preventDefault();
      body.classList.toggle('sidebar-collapse');
      body.classList.toggle('sidebar-open');
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() { 
    document.querySelector('.menu-item_register').addEventListener('click', (e) => {
      e.preventDefault();
      new Modal(App.getModal('register').element).open();
    })
    
    document.querySelector('.menu-item_login').addEventListener('click', (e) => {
      e.preventDefault();
      new Modal(App.getModal('login').element).open();
    })

    document.querySelector('.menu-item_logout').addEventListener('click', (e) => {
      User.logout();
      App.setState('init');
    })
  }
}
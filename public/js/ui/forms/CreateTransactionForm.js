/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const selectList = document.getElementById('expense-accounts-list')
    // Account.list(null, (err, response) => {
    //   if (err === null) {
    //     response.data.forEach(({ id, name }) => {
    //       selectList.innerHTML += `<option value="${id}">${name}</option>`;
    //     });
    //   }
    // })
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (err === null) {
        Modal.close();
        App.update();
      }
    }) 
  }
}
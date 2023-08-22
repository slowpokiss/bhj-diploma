class AsyncForm {
  
  constructor(element) {
    if (element) {
      this.element = element;
    } else {
      console.log(new Error('в конструктор передан пустой элемент'));
    }
  }
  registerEvents() {
    this.element.addEventListener('submit', (ev) => {
      ev.preventDefault();
      this.submit();
    })
  }

  getData() {
    let obj = {};
    Array.from(this.element.children).forEach((el) => {  
      obj[el.name] = el.value;
    });
    return obj;
  }
  onSubmit(options) {}

  submit() {
    this.onSubmit(this.getData())
  }
}
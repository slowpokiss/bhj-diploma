class AsyncForm {
  constructor(element) {
    if (!element) { 
      throw new Error('в конструктор передан пустой элемент') 
    };
    this.element = element;
  }

  registerEvents() {
    this.element.addEventListener('submit', (ev) => {
      if (this.element.checkValidity()) {
        ev.preventDefault();
        this.submit();
      }
    })
  }

  getData() {
    const formData = new FormData(this.element);
    return Object.fromEntries(formData.entries());
  }

  onSubmit(options) {}

  submit() {
    this.onSubmit(this.getData())
  }
}
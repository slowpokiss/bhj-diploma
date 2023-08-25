class Modal {
  constructor(element){
    if (!element) { throw new Error('в конструктор передан пустой элемент')} 
    this.element = element
    this.registerEvents();
  }

  registerEvents() {
    const onCloseEls = this.element.querySelectorAll('[data-dismiss="modal"]')
    onCloseEls.forEach((el) => {
      el.onclick = (ev) => {
        ev.preventDefault();
        this.onClose(el);
      }
    })
  }

  onClose(e) {
    e.onclick = (ev) =>{
      ev.preventDefault();
      this.close();
    }
  }
  open() {
    this.element.style.setProperty('display', 'block')
  }

  close(){
    this.element.style.removeProperty('display')
  }
}
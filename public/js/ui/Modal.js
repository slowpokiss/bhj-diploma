class Modal {
  constructor(element){
    if (element) {
      this.element = element
      //console.log(this.element)
      this.registerEvents();
    } else {
      console.log(new Error('в конструктор передан пустой элемент'));
    }
  }

  registerEvents() {
    const onCloseEls = this.element.querySelectorAll('[data-dismiss="modal"]')
    //console.log(onCloseEls)
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

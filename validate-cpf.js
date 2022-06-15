export default class ValidateCpf {
  constructor(element) {
    this.element = element
  }
  clean(cpf) {
    return cpf.replace(/\D/g, '')
  }
  structure(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }
  format(cpf) {
    const cleanCPF = this.clean(cpf)
    return this.structure(cleanCPF)
  }
  validate(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
    return matchCpf && matchCpf[0] === cpf
  }
  validateChange(cpfElement) {
    if (this.validate(cpfElement.value)) {
      cpfElement.value = this.format(cpfElement.value)
      cpfElement.classList.add('valid')
      cpfElement.classList.remove('error')
      cpfElement.nextElementSibling.classList.remove('active')
    } else {
      cpfElement.classList.remove('valid')
      cpfElement.classList.add('error')
      cpfElement.nextElementSibling.classList.add('active')
    }
  }
  addEvent() {
    this.element.addEventListener('change', () => {
      this.validateChange(this.element)
    })
  }
  addSpanError() {
    const errorElement = document.createElement('span')
    errorElement.classList.add('error-text')
    errorElement.innerText = 'CPF inválido'
    this.element.parentElement.insertBefore(
      errorElement,
      this.element.nextElementSibling
    )
  }
  init() {
    this.addEvent()
    this.addSpanError()
    return this
  }
}

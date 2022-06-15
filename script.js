import ValidateCpf from './validate-cpf.js'

const cpf = document.querySelector('#cpf')
const validateCpf = new ValidateCpf(cpf).init()

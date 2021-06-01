const formAuth = document.getElementById('form-auth')

formAuth.addEventListener('submit', (e) => {
  e.preventDefault();
  const elements = [...formAuth.elements].filter(element => element.nodeName === 'INPUT' ? element : false)
  const values = elements.reduce((prev, current) => {
    const data = {}
    data[current.name] = current.value
    return {...data, ...prev}
  }, {})
  console.log(values)
})
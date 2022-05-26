function generateAddress() {
  const elements = 'abcdefghijklmnopqrstuvwxyzABCDEFGHJIJKLMNOPQRSTUVWXYZ1234567890'
  const elementsArr = elements.split('')

  let newAddress = ''
  for (let i = 1; i <= 5; i++) {
    let index = Math.floor(Math.random() * (elementsArr.length))
    newAddress += elementsArr[index]
  }
  return newAddress
}

module.exports = generateAddress;
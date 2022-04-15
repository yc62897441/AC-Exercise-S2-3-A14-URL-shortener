const generateShortURL = function () {
  // 短網址長度參數
  const passwordLenght = 5

  // 生成字元集
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCase = upperCase.toLowerCase()
  const number = '0123456789'
  const characterSet = upperCase + lowerCase + number

  // 生成短網址
  let shortURL = ''
  for (let i = 0; i < passwordLenght; i++) {
    shortURL += characterSet[Math.floor(Math.random() * characterSet.length)]
  }

  // 回傳短網址
  return shortURL
}

module.exports = generateShortURL

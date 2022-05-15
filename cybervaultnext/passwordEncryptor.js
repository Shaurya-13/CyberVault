import crypto from 'crypto'

export const encryptString = (text) => {
    const cipher = crypto.createCipher('aes256', 'process.env.REACT_APP_SECRET_KEY')
    const encryptedData = cipher.update(`${text}`, 'utf8', 'hex') + cipher.final('hex')
    return encryptedData
}

export const decryptString = (encryptedText) => {
    const decipher = crypto.createDecipher('aes256', 'process.env.REACT_APP_SECRET_KEY')
    const decryptedData = decipher.update(encryptedText, 'hex', 'utf8') + decipher.final('utf8')
    return decryptedData
}

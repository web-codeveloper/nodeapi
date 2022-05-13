const saltCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateSalt = (length) => {
  let result = '';
  const saltCharactersLength = saltCharacters.length;
  for (let i = 0; i < length; i++) {
    result += saltCharacters.charAt(
      Math.floor(Math.random() * saltCharactersLength)
    )
  }
  return result
}

const encryptJWT = (JWT) =>
  JWT.slice(0, 37 + 6) +
  generateSalt(6) +
  JWT.slice(37 + 6, 37 + 15) +
  generateSalt(6) +
  JWT.slice(37 + 15, 37 + 24) +
  generateSalt(6) +
  JWT.slice(37 + 24);

const decryptJWT = (JWT) =>
  JWT.slice(0, 37 + 6) +
  JWT.slice(37 + 12, 37 + 21) +
  JWT.slice(37 + 27, 37 + 36) +
  JWT.slice(37 + 42);

module.exports = {
  encryptJWT,
  decryptJWT
}
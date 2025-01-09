
export const sendMessage = (message: string) => {
  const token = `8110556530:AAHCNEodsGc-84_G0NMbm80lxnOHUR38lI8`
  const chatId = `-4501113993`
  const Url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`
  fetch(Url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

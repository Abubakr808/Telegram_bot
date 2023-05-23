// https://api.telegram.org/bot6264745391:AAGaqHkQYB1F66pw6ECzJJQ-XExIKmloGfU/getUpdates

// let TOKEN = '6264745391:AAGaqHkQYB1F66pw6ECzJJQ-XExIKmloGfU'
// let CHAT_ID = '5650123194'
// let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
// let URL_FILE = `https://api.telegram.org/bot${TOKEN}/sendDocument`

// document.getElementById("tg").addEventListener('submit', function(e) {
//     e.preventDefault()
//     let = message =` <b>Заявка с сайта</b>\n`
//     message +=` <b>Отправитель :</b> ${this.name.value}\n`
//     message += `<b>Номер :</b> ${this.number.value}\n`
//     message +=` <b>Почта :</b> ${this.email.value}\n`
//     message +=` <b>Файл :</b> ${this.file.value}\n`
//     console.log(message)
//     axios.post(URL_API, {
//         chat_id: CHAT_ID,
//         parse_mode: "html",
//         text: message
//     }).then((res) => {
//         this.name.value = " "
//         this.number.value = " "
//         this.email.value = " "
//         this.file.value = " "
//         success.innerHTML = "Сообшения отправленно !"
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => {
//         console.log("Goooooooooood")
//     })
// })






let TOKEN = '6264745391:AAGaqHkQYB1F66pw6ECzJJQ-XExIKmloGfU'
let CHAT_ID = '5650123194'
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`

let tg = document.getElementById("tg")

tg.addEventListener("submit",function(e){
   e.preventDefault()
   const formData = new FormData()
   formData.append("chat_id",CHAT_ID)
   formData.append("document",this.document.files[0])
   axios.post(URL_API,formData,{
       headers:{
           'Content-Type':'multipart/form-data'
       }
   }).then((res) =>{
       this.document.value = ''
       succes.innerHTML ="собшения отправлено !"
       succes.style.display = 'block'
       setTimeout(() =>{
           succes.style.display = 'none'
       },3000)
   }).catch((err) =>{
       console.log(err)
   }).finally(() =>{
       console.log('good')
   })
})  
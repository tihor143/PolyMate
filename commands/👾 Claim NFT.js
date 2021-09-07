/*CMD
  command: 👾 Claim NFT
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("address")
if( wallet == undefined ){
Bot.sendMessage("_❌ wallet Not set_")
}else{
if (balance.value() < 2){
Bot.sendMessage("_❌ You have to get at least 2 ♦️Point!_")
}else{
Bot.sendMessage("*📤 Enter Point to Claim NFT*")
Bot.runCommand("auto")
}
}}

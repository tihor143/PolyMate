/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("address")
User.setProperty("address" , data.message ,"string")
Bot.sendMessage("✅ Enter Polygon wallet address from Trust Wallet set To :* "+data.message+"")

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_57_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICA4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MixcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpzWk4zc2pKWlMwRlNyOUphNGdNUzBYWWhCMVA2Nlgzd25WVzBlWmR1WFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTM3NDQ4NjE3OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQwODY1OTgzNzlCMTE2RDBCNUYyODM2NTdDMjdFODY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTM2NTQ2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkzNzQ0ODYxNzkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOUY0OTgxRjFEQjhGNDM5MTM4MDhEQzM0OTVGMjIwMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUzNjU0NzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQnVSU0lWWFhRc1dQZTE5TEo1aE9NQVwiLFxuICBcInBob25lSWRcIjogXCIxYjkwNDk1My0zYmQxLTQ2NTgtODcwOS04ODVmZmQwYjMzNDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAyLFxuICAgICAgMTQ4LFxuICAgICAgMzMsXG4gICAgICAxNSxcbiAgICAgIDIwLFxuICAgICAgNjcsXG4gICAgICA5MCxcbiAgICAgIDE5OSxcbiAgICAgIDE1MixcbiAgICAgIDIxOSxcbiAgICAgIDI3LFxuICAgICAgMjQwLFxuICAgICAgMTc0LFxuICAgICAgMjQsXG4gICAgICA2NyxcbiAgICAgIDEzOSxcbiAgICAgIDEwMixcbiAgICAgIDI3LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDAsXG4gICAgICAyNDMsXG4gICAgICA4LFxuICAgICAgMjQ1LFxuICAgICAgOTUsXG4gICAgICAxNDgsXG4gICAgICAxNjIsXG4gICAgICAyMzAsXG4gICAgICAxMjYsXG4gICAgICAxMjUsXG4gICAgICAxNDksXG4gICAgICAyMTAsXG4gICAgICAyMjAsXG4gICAgICAxNDcsXG4gICAgICAxNjYsXG4gICAgICAyNTUsXG4gICAgICAxMzUsXG4gICAgICAxOTgsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjQ3VlBBRjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkzNzQ0ODYxNzkxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDI4NTUyNTIxNzQ1MzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJJTEFMXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVmMWRjRkVOaW12cnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHdjNNaGxzc2NxbTlwbTAyVll6RGNtckNicUdVSXhUUmUrNWs1VFRoR1dzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImR4SkhVWjB3SG9NU2t5QXJBMjVJMzdFaHRSZzZUdGZseWxvQ0FPS0J6L2ZNK3h1Ui9ZOHdNRUtnUTJ0ZU91OHJKN2RnZHFYSFRSMGJldTVTVWd6K0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFMUHA4V2p0c3BKQlhrTHZ0MzZFbDVWemQ1MEJkd2Z3UUt1RjJrMSs2OGpaRHJSdU9SVEZtZG54Y1VCQUpSckRTYWZ5UXpKNm5IeDRrR3ZYUnFSMUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkzNzQ0ODYxNzkxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUzNjU0NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHQk5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdCTi5qc29uIjogIntcImtleURhdGFcIjpcIllsTFZQZE5Jck4xZ2c4L1RTUkNXUzlTTHJ1cVk3WTN6NDV3aHFyQ3FhbWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUyNjAyNjEyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MzY1NDY4NzMwXCJ9Igp9"  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

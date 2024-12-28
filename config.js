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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_28_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVYQmdjU0UwdnlRV2pHMVQxZllPdk9PcnJxZ0VVL3prU0pRazdOTndKZ0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTM3Nzg1OTY2NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBBNTRERkIwRTRCNDNBNjBDODhCOENERkIzRjQwM0U3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQwMzMwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkzNzc4NTk2NjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENkY5NEI3ODUzNTdGQTc0NjMzQjk5NkM0MkNFNTJGNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU0MDMzMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5Mzc3ODU5NjY0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjFBMjZBRTQ0N0RBOEEwOTdBM0YwOEExNTIyRDk0RURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NDAzMzA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTM3Nzg1OTY2NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRCMTVBNjdGMkFCNTgwMThCNEFFQzcwQThFQkM1NjA1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQwMzMwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSMm91Z3FNUlJnUzVqUTFNSVlRa0FRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5MDRlMDI0LWMwNWItNDk3Ny04N2ZlLWI1MGRjNTAzZDRhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDE2MCxcbiAgICAgIDIzLFxuICAgICAgMTcxLFxuICAgICAgNSxcbiAgICAgIDIwOCxcbiAgICAgIDEwMyxcbiAgICAgIDE0LFxuICAgICAgMTM4LFxuICAgICAgNjEsXG4gICAgICAyMSxcbiAgICAgIDQxLFxuICAgICAgMjA4LFxuICAgICAgMTEyLFxuICAgICAgMTU0LFxuICAgICAgMTQyLFxuICAgICAgMTAzLFxuICAgICAgMzcsXG4gICAgICAxNTQsXG4gICAgICA5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDM4LFxuICAgICAgODQsXG4gICAgICAxMjMsXG4gICAgICAyMDksXG4gICAgICAyMzMsXG4gICAgICA1MyxcbiAgICAgIDE1NSxcbiAgICAgIDc3LFxuICAgICAgMTMwLFxuICAgICAgMjM0LFxuICAgICAgMjQ5LFxuICAgICAgMTgxLFxuICAgICAgMjMyLFxuICAgICAgMTc0LFxuICAgICAgMTAwLFxuICAgICAgODgsXG4gICAgICAxNDMsXG4gICAgICA2NixcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhNQktYV0hEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5Mzc3ODU5NjY0NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDEzOTE5MzA1Mjc4NjE6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTYXJhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCt6bXRJQkVKL093THNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzTm4vQ0FvUklONmgzRVJ0TEYyd1hHaHVvZW5BSUdYMkNpTSsxU1phZUNvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhPVU5lWmZuQUJTb1QwVXJZbzNMMUdFK21qSEJkdVFXeE5BY3I0SUVBL3FWcTRCRDcwQ2wvNWM4WjU2ZU4rSEM0VnhjU09ZZyt2Wkd5MHpKRFdBbEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlpOMlZGSk1lbHE4R0xlN0FXaWgwQXRpbEJrVWlYZVhmM1QvRGNjUjBIbVpaZFFQK3htRVVxOUN1ZDJyc3RRZlB3cStzaDZsUWpYclAxMzlYZUZ6ZGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkzNzc4NTk2NjQ0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQwMzMwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxTUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFNQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNXVPR3dxNmlheVZ5ZDZ1cC9qZEJxSlpQMDNnNHZyM3VyakQxTEhaYXZORT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDA4MzQ0OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTQwMzMwMTc2NVwifSIKfQ=="  // PUT your SESSION_ID 


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

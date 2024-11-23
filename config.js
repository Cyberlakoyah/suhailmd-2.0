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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_19_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk1LFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkYytJYVd3OTVzUURhYjF3K0xnVUNrZVBrM05XODRSeFdSYURFSWg3WldVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5YUdid29naFNhZXM4b3E1d1JENDNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI5MmE5ODNmLWIxOTEtNDc3NC05MDk2LWFiMzQ3MWJjNjQyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDg3LFxuICAgICAgMTM4LFxuICAgICAgMzEsXG4gICAgICAxNTcsXG4gICAgICAyNDgsXG4gICAgICA4NixcbiAgICAgIDIyMyxcbiAgICAgIDEwNCxcbiAgICAgIDk2LFxuICAgICAgMTAsXG4gICAgICAxNTksXG4gICAgICAxNzUsXG4gICAgICAxODMsXG4gICAgICA3NixcbiAgICAgIDEwNCxcbiAgICAgIDE0MixcbiAgICAgIDEzLFxuICAgICAgMTA3LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxNjIsXG4gICAgICAyNTQsXG4gICAgICAyMTgsXG4gICAgICA0NSxcbiAgICAgIDEyNyxcbiAgICAgIDk0LFxuICAgICAgMzYsXG4gICAgICA3MixcbiAgICAgIDI0OSxcbiAgICAgIDE2NSxcbiAgICAgIDMxLFxuICAgICAgMjA1LFxuICAgICAgMSxcbiAgICAgIDE2MSxcbiAgICAgIDIyNixcbiAgICAgIDk2LFxuICAgICAgMTQsXG4gICAgICAxMDQsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0w0SEgxVjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQyNjM4Mjk2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPc2hhZGEgbGFrc2hhblwiLFxuICAgIFwibGlkXCI6IFwiMjI3ODY5NTIzNDQ3ODc1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmlnNWVzREVPS0Rocm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUSi9tZUx5YjNwMnk5b0UxcVlOUklBZDNnZC9JVUZYUS91emRlYS9yWjBFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhhVjh3U0I3eHNNZGhWbC9DYkpmcEFWb3lHcGJBVjJLMW9RSFE5aHkvSzA4cDNwenVDclpFSkZkalVpaWNZNHVPV1JDaTFGNkVPRTVxUzZKZ0w5cEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktxS0pJL0tCQjlHSDhocDJiWjI0KzRUMDFWTUt0WjR1WElndk04Nnd1anNkbHNrMHVibFRGOTE1a3FjVHlkdEJrZjNZZk4rcTBXMnBzclFrMEdqVkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQyNjM4Mjk2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzNDYzNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPbWdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tZy5qc29uIjogIntcImtleURhdGFcIjpcIkhHOGQ0MFFLdmljQ3lPOUpOTzIvSEZmS0tLclJqbWhOTDVIbnZSS1FoOHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAzMTM2MDUzNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMzQ2MzE5NTE2XCJ9Igp9"  // PUT your SESSION_ID 


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

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="bamigboyeraymond21@gmail.com"
global.location="ekiti, Nigeria."


global.mongodb= process.env.MONGODB_URI || "Mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/DrkuCkLXUs32wyBFmBnSUA";
global.website=process.env.GURL || "https://chat.whatsapp.com/DrkuCkLXUs32wyBFmBnSUA" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349163103803”// Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349163103803";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "TRUE", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349163103803";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_32_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlOTl2SDYyb3VVQytzVEFkeVJDYUw5bnRvWjB2dFc3REYzakdUNk1ibHhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDM3Mjg2OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJCMTQ2MkI1NjY5MzU0MDFDRDM3MDA5MUQyNzFFMEM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTM1ODc0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDM3Mjg2OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4NjdGNTgwODc1ODk3MjcxNzg0NzkyN0UyNTA5NTY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTM1ODc0N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlTmJrMmxxZlROUzhEMVVTd2R4WnBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0ODg3NTUzLWY2NzktNGFhMi1hMTJhLTI0MzUwYWMxNjllMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxOTUsXG4gICAgICAxNDIsXG4gICAgICAyMSxcbiAgICAgIDM0LFxuICAgICAgODIsXG4gICAgICAxODgsXG4gICAgICAyMTMsXG4gICAgICAxNTAsXG4gICAgICA5MSxcbiAgICAgIDYzLFxuICAgICAgNjAsXG4gICAgICA2OCxcbiAgICAgIDE4MSxcbiAgICAgIDIwNCxcbiAgICAgIDAsXG4gICAgICAxODEsXG4gICAgICAyNTQsXG4gICAgICAxNixcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDExLFxuICAgICAgMTIxLFxuICAgICAgMjQ1LFxuICAgICAgMTUxLFxuICAgICAgMTc1LFxuICAgICAgNyxcbiAgICAgIDMzLFxuICAgICAgMTIsXG4gICAgICAyMjIsXG4gICAgICAxODEsXG4gICAgICAyMzIsXG4gICAgICAxNjMsXG4gICAgICAyMjIsXG4gICAgICAxODAsXG4gICAgICAxMyxcbiAgICAgIDk4LFxuICAgICAgNDAsXG4gICAgICAxMTMsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUE0TkU4WU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDM3Mjg2OTA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMzQwNzc4MTg3NTc5NzoxOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSQVkgQk9UXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxUZ2ZjQ0VKV1krYkVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmR1NCM013cjVpa3duMytzcFFZaDRFQ1NvalVvSE9EZVBSbG94YXEyQzNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpCN3k0T0tjMTlnOEh2ZUJEZkxMYWpWbGFOSldvV1lnajlvd1FQTk5QU3VMM1ZoYmkxd2c5UDVwT3h4c2ttcyt3UnRRL29ocERzQTVMQkY2RWF3NkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNORmNTbkRneDRlRHIvSmhJdGtlUFNYdnBVSHpxb2VTMFhaTnl3U3U0OFZkY24xVzFoakdkR2hJSUNHZk9IVnlWN0YwSytaWFZOaVRSaFg0NTV4OWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDM3Mjg2OTA6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTM1ODc0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNLNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0s2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3FQaEVFbUYzbzN0bGNZZFhyd3Q5bkdBMlZMWU9QdU8zYmk2R2ZsdDBYZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODY0NTkwMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©RAY" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "RAY MD",
  ownername:process.env.OWNER_NAME||"RAYMOND",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

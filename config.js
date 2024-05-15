const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94768859286" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94768859286";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "TRUE"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94768859286";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_07_05_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExLFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2QjRCSFpRb08xYml6Ni85cXZ1czA1WHFmc05ZZGdjYURtNnNabWdKdGg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzY4ODU5Mjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMTVDNjBCQzhDMEE4ODA2QTNFQTk0QTE0RTVBNkJDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU3NTMyNjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2ODg1OTI4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEUwM0IyNjQyRjMyNjI2M0RDNUVEMEQwRENEMDJEODZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NzUzMjYwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9aRnVURDZVVG9pbUg1VWdMYkFqb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTlkNDcxN2ItYWVkYS00ZTM1LWJiMjctOWFhNDgzOWRiYzZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjIsXG4gICAgICA0MixcbiAgICAgIDE3NCxcbiAgICAgIDIzLFxuICAgICAgOTQsXG4gICAgICAxNzcsXG4gICAgICAxOTksXG4gICAgICAxMTgsXG4gICAgICAxOTQsXG4gICAgICAyMTMsXG4gICAgICAyNixcbiAgICAgIDEzOSxcbiAgICAgIDEyMSxcbiAgICAgIDE2NSxcbiAgICAgIDM5LFxuICAgICAgMjQsXG4gICAgICA3NCxcbiAgICAgIDY2LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICA5LFxuICAgICAgMTUxLFxuICAgICAgODUsXG4gICAgICA3LFxuICAgICAgMjQ5LFxuICAgICAgNTYsXG4gICAgICA2NyxcbiAgICAgIDc3LFxuICAgICAgOTQsXG4gICAgICAyMTAsXG4gICAgICA5MyxcbiAgICAgIDg4LFxuICAgICAgODMsXG4gICAgICAyNyxcbiAgICAgIDIyNCxcbiAgICAgIDQ5LFxuICAgICAgMTA5LFxuICAgICAgMjI4LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTyt5ZzdjRUVLV2lrYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXU0g4SDl5VlZtOW40c2orT3M1Y0l6emozNnRSVlN5UGwyZ2owLzZCM2hZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFPc0pxV2RMb2wvVDF2Nnh0S2FYbnVyYTUxRW03Z3QvTnVuQU1Ob1pGc3NCZU1WRzdLbjNtajY0eW1MK0ZXN2lvNGJRZGZHS3RHQkZvRkIvTk9GeENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndVTUNUOEZRSnFPQngvNEI4dVlHN0txZVJCbmsvS0VhcnhoVXhjV2l3bU9KSFdwT3VWdThpZEdoV0FqK0Jld29yblJCL2I2UWRzWVl5YTNZYjA4YUF3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njg4NTkyODY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9XTkVSIE1FR0EgS0lOR1wiLFxuICAgIFwibGlkXCI6IFwiMjg1NTc3NTc2OTQyMDc6N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY4ODU5Mjg2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTc1MzI1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1oUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWhQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRlF5eFBuOTdwenNGOWlRaXZXN0ZJSDVLV1JRT1lZUEpITEo2alY5aHNBZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTg5MTQwODQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU3NTMyNTY5MzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "OWNER MEGA KING",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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

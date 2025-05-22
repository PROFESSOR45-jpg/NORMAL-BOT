const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61UW47iRhTdS/2CBr8xSC3FT97Y2MZAR/ko7LJd4BflMmBGrCVf2UUWlSVEhu5MS5NMOlIsWSqXq+4959xz71eQF7hCM9SA4VdQEnyGFLVL2pQIDIFaRxEioAtCSCEYAmlZZk6fYV+3y/PhTK56uS+NWl1Epam4kh0V/KV3MsxNkykv4N4FZb1PcfCDgDGLTS3Joiwt19w6UdKjce10Rtl0rBESboLbcYcdGy5XifwC7m1EiAnOY6NMUIYITGeosSEmn4PPqD4dGx5fiTu2d9rOSMAF/R52/GR881f6SL9qy22lNTg7fg7+xFslNiksgZ7WyaF/M+nycgh1Ql45sUkvaDo/YuR6N6xNnvArHOconIQop5g2n9a9sfRV57RfQTcYWdGYneLgkmqnkYHSmX0cbNazs+/Vmd7jP6l71ktjKbaMleNvlHW5H9RG3quKSb7fJ45V4QgK4qVm5VIrPgK3ybtXjv9Jd9MnupDCg52SnohuN7iY9AWfXqE4oEViReItDy/zfX/DfA6+qevxYLSVSs/fpFOyXHBWvt75s2t/MBCIePSi5dkdbYjWGN/gQ1qTH6HUDhdUs+pxt0Q7xj/V42bH0KUXxH3OmaFFOfFno30sJ1wEo3R/Ok1JrLN+wGvldncaLWxt6fEjDKWqzizoJMWhjNT48vJgdETNJARD9t4FBMW4ogRSXOTtHsdzXQDDs4sCguhDXjDfXEL+1liFJ1+lWZKzQnp+TV4dAznQnPNMrbrbrAm1HgxeQBeUpAhQVaFwjCtakGaBqgrGqALDnx+VakkTlBUUTXEIhoATBZblJFEesNJP1ZdLAmkFy/JLjijogogU2QKBISU16oLHBVPgJUlg2L4i6yIrGYzIm5LB6qooC6okCi3F7JnUwxmqKMxKMGT7Ql+WZZnn7t3/B4dqqqamm5wqGQKrDQxBZWVD0xWTMw2tr6s/xiEy91+6IEdX+vRxqz7PdkGESUXXeV2mBQzfTf7+EwZBUefUbfJAaxeIgOGHbUQpzuOqZVbnkAQJPiOt5QGGEUwr9FfBEUHhO5e3IaYVYetDm5luWFv0QYu9DfSdNkOJ+16e9HFMZBm+L8gc1xcGMtsebPe7IIfZI7ZjmYbrWs4fv/72e/u2Cr1hb1OFiEKcVq37527YIZVhzHW/rozRSAliRYsV8I3rew89Pbqesiac5dfFq3zkvZmti72wsdzMCDaH2DpP/WicjKm+G5jrl78JAobAra0Boso26yxi5Jw903JrS9Et5xppGjNv8K30151SFfnLgVtPz1uh8JK03mqDdVq4B7g/WIsL6qVhOq2baNspx0qjrl7abCE64wB9TNbISyveaJ3BbiQvxjWWOqhfJXjcQ3i5jObCjuJA7p0Tbeu6K9sy/NjtnOx4IvW2DHueN+6JCed5rHl7Z8TP55WdCnKyenb3Y7qkb1Mdv/UdfnxGGD2G5Fs9/rWqT+Ct+Zh790OMt7H7D6NL9bXQ2eBS9kbRdMk0h0sn4oPDsUzGZiHopPG3V8Hprzjb8cG97YIyhTQqSAaGAOYhKR6mIUXdunmSR8WP5qQ6mSjxk3kKK6p865C/aTpOfJ6ySVGOYZWAIWBnQjIWWrs3Slm6FNL3hgNK+2jXGbj/CUTnEh6bCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "PROFESSOR",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254112658916",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});






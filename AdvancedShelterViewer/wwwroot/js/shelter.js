

//const { sjcl, key, iv, fromBits, decrypt, aes, toBits } = require('./aes.js');

//export class shelter {


window.readFileAsBase64 = (fileInput) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = () => {
                reader.abort();
                reject(new Error("Error reading file."));
            };
            reader.onload = () => {
                resolve(reader.result);
            };
            //reader.readAsDataURL(fileInput.files[0]);
            reader.readAsText(fileInput.files[0]);
        });
    };

    /*
    decryptString2 = (base64String) => {
        return new Promise((resolve, reject) => {
            var cipherBits = sjcl.codec.base64.toBits(base64Str);
            var prp = new sjcl.cipher.aes(key);
            var plainBits = sjcl.mode.cbc.decrypt(prp, cipherBits, iv);
            var jsonStr = sjcl.codec.utf8String.fromBits(plainBits);
            try {
                console.log(JSON.parse(jsonStr));
                resolve(JSON.parse(jsonStr));
            } catch (e) {
                reject(new Error("Error Decrypting String"));
            }
        });

    }*/

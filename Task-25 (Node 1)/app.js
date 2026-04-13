//TASK-3

import fs from 'fs';
import path from 'path';

const backup ='./backup';

if (!fs.existsSync(backup)) {
    fs.mkdirSync(backup);
    console.log('Backup qovluğu yaradıldı.');
}

const fileList = fs.readdirSync('./');
fileList.forEach(file => {
    if (path.extname(file) === '.txt') {
        const oldaddress = fayl;
        const newaddress = path.join(backup, file);

        fs.copyFileSync(oldaddress, newaddress);
        console.log(`Fayl "${file}" backup qovluğuna kopyalandı.`);
    }
});
console.log('Tapşırıq uğurla tamamlandı.');

//TASK-1

import os from 'os';
import { log } from 'console';
import fs from 'fs';

const platform = os.platform();
const arxhitektura = os.arch();
const umumiKesh = os.totalmem();
const boshKesh = os.freemem();

const data = `
platforma: ${platform}
arxhitektura: ${arxhitektura}
umumiKesh: ${umumiKesh} MB;
boshKesh: ${boshKesh} MB;
`;

fs.writeFile(`system-info.txt`, data, (err) => {
    if (err) {
        console.error('Xəta baş verdi:', err);
    } else {
        console.log('Sistem məlumatları "system-info.txt" faylına yazıldı.');
    }
});
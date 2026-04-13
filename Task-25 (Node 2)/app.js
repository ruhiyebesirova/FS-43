//TASK-4
import fs from "fs";

const command = process.argv[2];
const name = process.argv[3];
const age = process.argv[4];

if (command === "addUser") {
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Fayl oxunmadı:");
            return;
        }

        let users = [];

        try {
            users = JSON.parse(data);
        } catch {
            users = [];
        }

        const newUser = { name, age: Number(age) };
        users.push(newUser);

        fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.log("Fayl yazılmadı");
            } else {
                console.log("Yeni user əlavə edildi:", newUser);
            }
        });
    });
} else {
    console.log("Komanda yanlışdır.");
}

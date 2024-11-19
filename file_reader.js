const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // your code here
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        const hobbies = JSON.parse(data4);
        let be = ""

        if(hobbies.length === 1) {
          be = "is";
        } else {
          be = "are";
        }

        let stringHobbies = "";
        for(let i = 0; i < hobbies.length; i++) {
          if(i == 0) {
            stringHobbies = hobbies[i];
          } else if(i == (hobbies.length - 1)) {
            stringHobbies += ` and ${hobbies[i]}`;
          } else {
            stringHobbies += `, ${hobbies[i]}`;
          }
        }

        // console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);

        console.log(`${data1} ${data2} is ${data3} years old and his hobbies ${be} ${stringHobbies}`);
      })
    })
  })
})
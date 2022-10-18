const app = require("./app");
require("dotenv").config();
require("colors");


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('\t*---------------*\n'.bgBlue.bold);
    console.log("\tTOUR MANAGEMENT\n".bgGreen.bold);
    console.log('\t*---------------*\n'.bgBlue.bold);
});

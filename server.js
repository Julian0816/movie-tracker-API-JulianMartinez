const express = require('express');
const app = express();
const {seed} = require('./models')
const userRouter = require('./routes/users');
const showRouter = require('./routes/shows')

app.use(express.json());
app.use("/users", userRouter);
app.use("/shows", showRouter);



async function serve (port) {

    await seed()

    app.listen(port, () =>{
        console.log(`App listening on port ${port} --> http://localhost:3000`);
    })
}

serve(3000);
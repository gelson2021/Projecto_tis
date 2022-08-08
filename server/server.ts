


import { app } from "../rotas/mapear";


const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Listening to requests on port http://localhost:${port}`);
});
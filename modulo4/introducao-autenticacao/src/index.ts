import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import postUser from "./endpoints/postUser"

app.post('/user/signup', postUser)
/* app.post('/user/signup', createUser) */
app.put('/user/edit/:id', editUser)


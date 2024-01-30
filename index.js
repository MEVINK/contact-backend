// import express
const express = require('express')
// import cors

const cors = require('cors')

const logic = require('./services/logics')

// create an application using express

const contactServer = express()

// using cors to connect frontend port

contactServer.use(cors({
    origin: 'http://localhost:3000'
}))
//create middleware for parsing jon data

contactServer.use(express.json())

//define port number

contactServer.listen(8000, () => {
    console.log("contactServer listening on the port 8000");
})

//Api call for all contact details

contactServer.get('/get-all-contacts', (req, res) => {
    //logic -funtion

    logic.getAllcontacts().then((response) => {
        res.status(response.statuscode).json(response)
    })

})

//API call for add a contact details
contactServer.post('/add-contact', (req, res) => {
    logic.addcontact(req.body.id, req.body.name, req.body.age, req.body.phone, req.body.email).then((response) => {
        res.status(response.statuscode).json(response)
    })
})

//API call for delete a contact

contactServer.delete('/delete-contact/:id', (req, res) => {
    logic.deletecontact(req.params.id).then((respons) => {
        res.status(respons.statuscode).json(respons)
    })
}
)

// view

contactServer.get('/get-a-contact/:id', (req, res) => {

    logic.getacontact(req.params.id).then((response) => {
        res.status(response.statuscode).json(response);
    })

})

//update
contactServer.post('/update-a-contact/:id', (req, res) => {

    logic.updateContact(req.params.id, req.body.name, req.body.age, req.body.phone, req.body.email).then((response) => {
        res.status(response.statuscode).json(response);
    })

})
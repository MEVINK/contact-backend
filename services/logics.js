//import db.js

const db = require('../services/db')

//logic for get all contacts in db

const getAllcontacts = () => {
    return db.agent.find().then(
        (result) => {
            if (result) {
                return {
                    statuscode: 200,
                    agents: result
                }
            }
            else {
                return {
                    statuscode: 404,
                    message: 'Contact not found'

                }
            }
        }
    )

}
//Add contact to the db
const addcontact = (id, name, age, phone, email) => {
    return db.agent.findOne({ id }).then((result) => {
        if (result) {
            return {
                statuscode: 404,
                message: "Contact already exist"
            }
        }
        else {

            //id is  not found
            const newContact = new db.agent({ id, name, age, phone, email })
            newContact.save()

            return {
                statuscode: 200,
                message: "Contact added successfully..."
            }

        }
    })
}

//logic of delete

const deletecontact = (id) => {
    return db.agent.deleteOne({ id }).then((response) => {
        return {
            statuscode: 200,
            message: "Contact delete successfully"
        }
    }
    )
        .catch((error) => {
            return {
                statuscode: 401,
                message: "can't delete a contact from the db"
            }
        })
}

//GEt a perticular contacct

const getacontact = (id) => {
    return db.agent.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    statuscode: 200,
                    agents: result
                }
            }
            else {
                return {
                    statuscode: 404,
                    message: 'Contact not found'

                }
            }
        }
    )

}
//logic forr update an contact

const updateContact = (id,name,age,phone,email) => { //updated 

    return db.agent.findOne({id}).then(
        (result) => {
            if (result) {
                result.id = id;
                result.name = name;
                result.age = age;
                result.phone = phone;
                result.email = email;
                
                result.save();
                return {
                    statuscode: 200,
                    message: 'contact details update successfully'
                }
            }
            else {
                return {
                    statuscode: 404,
                    message: 'Contact not found'

                }
            }
        }
    )

}

module.exports = {
    getAllcontacts, 
    addcontact, 
    deletecontact, 
    getacontact, 
    updateContact
}
const { Contact: ContactModel } = require('../models/Contact');

const contactController = {

    create: async(req, res) => {
      try {
        
        const contact = {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          cpf: req.body.cpf,
          address: req.body.address,
          message: req.body.message
        };

        const result = await ContactModel.create(contact);

        res.status(201).json({result, msg: "Successful contact"})

      } catch (error) {
        console.log(error)
      };
    },

    getAll: async (req, res) => {
      try {
        const contact = await ContactModel.find();
  
        res.json(contact);
        
      } catch (error) {
        console.log(error)
      };
    },

    get: async(req, res) => {
      try {
        const id = req.params.id
        const contact = await ContactModel.findById(id);

        if (!contact) {
          res.status(404).json({msg: "Id not found!"});
          return
        }

        res.json(contact)
      } catch (error) {
        console.log(error)
      };
    },

    delete: async(req, res) => {
      try {
        const id = req.params.id

        const contact = await ContactModel.findById(id);

        if (!contact) {
          res.status(404).json({msg: "Id not found!"});
          return
        };

        const deletedContact = await ContactModel.findByIdAndDelete(id);

        res.status(200).json({deletedContact, msg: "Contact is deleted"})

      } catch (error) {
        console.log(error)
      };
    },

    // update: async (req, res) => {
    //   const id = req.params.id;

    //   const contact = {
    //       name: req.body.name,
    //       description: req.body.description,
    //       price: req.body.price,
    //       image: req.body.image
    //   };

    //   const updatedContact = await ContactModel.findByIdAndUpdate(id, contact)

    //   if (!updatedContact) {
    //     res.status(404).json({msg: "Id not found!"});
    //     return
    //   };

    //   res.status(200).json({contact, msg: "Contact is updated"})
    // }
}

module.exports = contactController
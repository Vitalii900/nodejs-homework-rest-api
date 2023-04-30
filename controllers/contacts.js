
const { HttpError, ctrlWrapper } = require('../helpers');
const contactsOperations = require('../models/contacts');

const getAll = async (req, res) => {
    const contacts = await contactsOperations.listContacts();
    res.json(contacts);
};

const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);
    if (!result) {
      throw HttpError(404, `Contact with id=${contactId} not found`);
    }
    res.json(result);
};

const add = async (req, res) => {
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json(result);
};

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, `Contact with id=${contactId} not found`);
    }
    res.json(result);
};

const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    if (!result) {
      throw HttpError(404, `Contact with id=${contactId} not found`);
    }
    res.json({
      message: 'contact deleted',
      result,
    });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
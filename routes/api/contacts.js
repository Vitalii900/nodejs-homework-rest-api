const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { addSchema, updateFavoriteSchema } = require('../../models/contact');

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(addSchema), ctrl.add);

router.put('/:contactId', authenticate, isValidId, ctrl.updateById);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateFavorite,
);

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteById);

module.exports = router;

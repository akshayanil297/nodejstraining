const express = require('express');
const validate = require('express-validation');
const empController = require('../controller/employees');
const {authorize} = require("../middleware/authorization.middlware");
const {
    idParamsSchema,
    postEmployeeBodySchema,
    editEmployeeBodySchema,
    postEmployeeDepartmentBodySchema,
    postEmployeeRoleBodySchema,
    AddressBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /employees
router.get('/',authorize, empController.getAllEmployees);

// GET => /employees/id
router.get('/:id',authorize, validate(idParamsSchema), empController.getEmployee);

// POST => /employees
router.post('/',authorize, validate(postEmployeeBodySchema), empController.postEmployee);

// PUT => /employees/id
router.put('/:id',authorize, validate(editEmployeeBodySchema), empController.editEmployee);

// DELETE => /employees/id
router.delete('/:id',authorize, validate(idParamsSchema), empController.deleteEmployee);

// GET => /employees/id/departments
router.get('/:id/departments',authorize, validate(idParamsSchema), empController.getEmployeeDepartments);

// POST => /employees/id/departments
router.post('/:id/departments',authorize, validate(postEmployeeDepartmentBodySchema), empController.postEmployeeDepartment);


router.get('/:id/roles',authorize, validate(idParamsSchema), empController.getEmployeeRoles);


router.post('/:id/roles',authorize, validate(postEmployeeRoleBodySchema), empController.postEmployeeRole);


router.post('/:id/address',authorize, validate(AddressBodySchema), empController.postAddress);


router.get('/:id/address',authorize, validate(idParamsSchema), empController.getAddress);



module.exports = router;

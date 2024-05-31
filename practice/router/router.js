const express = require('express')
const { gettask,getalltasks,createtask,deletetask,updatetask } = require('../controller/controller')
const router = express.Router()


router.route('/').get(getalltasks).post(createtask)
router.route('/:id').patch(updatetask).delete(deletetask).get(gettask)

module.exports = router
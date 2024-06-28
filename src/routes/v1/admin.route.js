const express = require("express")
const { admin_controller } = require("../../controller")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post(
    "/create-admin",
    //cb => controller
    admin_controller.create_admin_C
)

router.post(
    "/create-token",
    //cb => controller
    admin_controller.create_token_C
)

router.post(
    "/decode-token",
    //cb => controller
    admin_controller.decode_token_C
)

router.get(
    "/list",
    //controller
    admin_controller.get_admin_c
)


router.delete(
    "/delete-admin",
    //controller
    admin_controller.delete_admin
)

//params
router.delete(
    "/delete-admin/:adminid",
    //controller
    admin_controller.delete_admin
)

router.put(
    "/update-admin/:update_id",
    //cp => controller
    admin_controller.update_admin
)


module.exports = router
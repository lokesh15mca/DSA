const multer = require('multer');

module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        filesize: 1024 * 1024 * 5
    }
})
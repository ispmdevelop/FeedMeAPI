import * as path from "path";
import multer from "multer";

export function getStorage(folder: String) {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, `../public/${folder}`));
        },
        filename: function (req: any, file, cb) {
            if (checkValidExtension(file)) {
                let name = Math.round(Date.now() / 1000) + "." + getExtension(file);
                req.body.imageName = name;
                return cb(null, name);
            }
            let err = new Error("MulterError: extension not allowed");
            err.name = "MulterError";
            return cb(err, null);
        }
    });
    return multer({ storage });
}

function getExtension(file) {
    let ext: any = file.originalname.split(".");
    ext = ext[ext.length - 1];
    return ext;
}

function checkValidExtension(file) {
    let ext: any = getExtension(file);
    if (ext == "jpg" || ext == "png" || ext == "jpeg") {
        return true;
    }
    return false;
}

import * as fs from "fs";
export function deleteImage(path: fs.PathLike) {
    if (fs.existsSync(path))
        fs.unlinkSync(path);
}
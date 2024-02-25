import db from "../index";

export async function getProducts() {
    return await new Promise((res, rej) => {
        try {
            res(
            db.prepare("SELECT * FROM products").all()
        )
        } catch (err) {
            rej(err)
        }
    })
}
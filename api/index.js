import express from "express";
import { connection } from "../db.js";

const app = express();
app.use(express.json());

app.get("/product", async(req, res) => {
    const result = await connection.query("SELECT * FROM product");
    res.json(result);
})

app.post("/product", async(req, res) => {
    await connection.execute("INSERT INTO product (name, price) VALUES (?, ?)", [
        req.body.name,
        req.body.price,
        ]);
    res.send("data tersimpan");
})

app.put("/product/:id", async(req, res) => {
    await connection.execute("UPDATE product SET name = ?, price = ? WHERE id = ?", [
        req.body.name,
        req.body.price,
        req.params.id,
        ]);
    res.send("data terupdate");
})

app.delete("/product/:id", async(req, res) => {
    await connection.execute("DELETE FROM product WHERE id = ?", [
        req.params.id,
        ]);
    res.send("data terhapus");
})
app.listen(3000, () => console.log("server berhasil di jalankan"));

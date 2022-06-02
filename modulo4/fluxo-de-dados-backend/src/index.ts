import express from "express";
import cors from "cors";
import { products } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, function () {
  console.log("O PAI TÁ ON!");
});

//-------------------------------------------------------------------------------------------------------------------------------------------------------

//1 TESTE
app.get("/test", (req, res) => {
  res.send("O PAI TÁ ON!");
});

//3 CADASTRAR NOVO PRODUTO
app.post("/cadastro-novo-produto", (req, res) => {
  try {
    const idAleatório = Math.floor(Date.now() * Math.random()).toString(36);

    const { name, price } = req.body;

    if (price <= 0) {
      throw new Error("Preço precisa ser maior que 0");
    }
    if (req.body.name !== String || req.body.price !== Number) {
      throw new Error("Parâmetro de nome ou preço não aceito");
    }
    if (!name) {
      throw new Error("Nome não encontrado");
    }
    if (!price) {
      throw new Error("Preço não encontrado");
    }

    products.push({ id: idAleatório, name, price });

    res.send(products);
  } catch (error: any) {

    switch (error.message) {
      case "Nome não encontrado":
        res.status(422);
        break;
      case "Preço não encontrado":
        res.status(422);
        break;
      case "Preço precisa ser maior que 0":
        res.status(422);
        break;
      case "Parâmetro de nome ou preço não aceito":
        res.status(422);
        break;
      default:
        res.status(500);
        error.message("Erro inesperado no servidor");
        break;
    }
    res.send(error.message);
  }
});

//4 RETORNAR TODOS OS PRODUTOS CADASTRADOS
app.get("/retorna-todos-produtos", (req, res) => {
  res.send(products);
});

//5 EDITAR PREÇOS
app.put("/editar-preco/:id", (req, res) => {
  const idDoProduto = req.params.id;
  const { price } = req.body;

  const newPrice: any = products.find(
    (prodPrice) => prodPrice.id == idDoProduto
  );

  newPrice.price = price;

  res.send(newPrice);
});

//6 DELETAR PRODUTO
app.delete("/deletar-produto/:id", (req, res) => {
  const idDoProduto = req.params.id;

  const indexProducts = products.findIndex((prod) => prod.id == idDoProduto);

  function newArray(): any {
    if (indexProducts === -1) {
      return res.status(404).json({ error: "Produto não encontrado" });
    } else {
      products.splice(indexProducts, 1);

      return products;
    }
  }
  res.send(newArray());
});

//7

import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const title = req.query.title
      let order = req.query.order
      let sort = req.query.sort
      let page = Number(req.query.page)

      if(page < 1 || isNaN(page)) {
         page = 1
      }

      const size = 10

      let offset = (page-1) * size

      if(title === '') {
        throw new Error("Title é obrigatório!")
      }

      if(order !== 'asc' && order !== 'desc') {
         order = 'asc'
      }

      if(sort !== 'title' && sort !== 'created_at') {
         sort = 'title'
      }


      const result = await connection("aula49_recipes")
      .where("title", "like", `%${title}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      const recipes = result.map(toRecipe)

      if(recipes.length < 1) {
         throw new Error("Nenhuma receita com esses parametros foi encontrada.")
      }

      res.status(200).send(recipes)

   } catch (error: any) {
      res.status(500).send({
         message: error.message || "Aconteceu algo inesperado"
      })
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}
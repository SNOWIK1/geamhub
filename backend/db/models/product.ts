import db from "../index";
import { AppInterfaces } from "../../interfaces";
import Database from "better-sqlite3";

export namespace ProductModel {
  /**
   * Finds all products entities
   * @returns {AppInterfaces.IProduct[]} all found entities
   */
  export async function findAll(): Promise<AppInterfaces.IProduct[]> {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          db.prepare("SELECT * FROM products").all() as AppInterfaces.IProduct[]
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Find product with specified ID
   * @param id product ID
   * @returns found product, otherwise null
   */
  export async function findById(
    id: number
  ): Promise<AppInterfaces.IProduct | null> {
    return new Promise((resolve, reject) => {
      try {
        const product = db
          .prepare(
            `
            SELECT * FROM products
            WHERE id = ?
            `
          )
          .get(id) as AppInterfaces.IProduct;

        if (!product) {
          resolve(null);
        }

        resolve(product);
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Inserts product entity into database
   * @param {AppInterfaces.IProduct} product product object
   * @returns {Database.RunResult}
   */
  export async function insert(
    product: AppInterfaces.IProduct
  ): Promise<Database.RunResult> {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          db
            .prepare(
              `
                    INSERT INTO products (isPrivate, isDiscussion, mainChannel, targetAudience, lang, numberOfUsers, type, contentType, createdAt)
                    VALUES (@isPrivate, @isDiscussion, @mainChannel, @targetAudience, @lang, @numberOfUsers, @type, @contentType, @createdAt)
                `
            )
            .run(product)
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Updates product entity
   * @param {AppInterfaces.IProduct} product product object
   * @returns {Database.RunResult}
   */
  export async function update(
    product: AppInterfaces.IProduct
  ): Promise<Database.RunResult> {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          db
            .prepare(
              `
                UPDATE products
                SET
                isPrivate = @isPrivate,
                isDiscussion = @isDiscussion,
                mainChannel = @mainChannel,
                targetAudience = @targetAudience,
                lang = @lang,
                numberOfUsers = @numberOfUsers,
                type = @type,
                contentType = @contentType,
                createdAt = @createdAt
                WHERE id = @id
            `
            )
            .run(product)
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Deletes product with specified ID
   * @param {number} id product ID
   * @returns {Database.RunResult}
   */
  export async function destroy(id: number): Promise<Database.RunResult> {
    return new Promise((resolve, reject) => {
      try {
        resolve(db.prepare("DELETE FROM products WHERE id = ?").run(id));
      } catch (err) {
        reject(err);
      }
    });
  }
}

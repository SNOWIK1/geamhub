import db from "../index";
import { AppInterfaces } from "../../interfaces";
import Database from "better-sqlite3";

export namespace UserModel {
  /**
   * Finds all users entities
   * @returns {AppInterfaces.IUser[]} all found entities
   */
  export async function findAll(): Promise<AppInterfaces.IUser[]> {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          db.prepare("SELECT * FROM users").all() as AppInterfaces.IUser[]
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Find user with specified ID
   * @param id user ID
   * @returns found user, otherwise null
   */
  export async function findById(
    id: number
  ): Promise<AppInterfaces.IUser | null> {
    return new Promise((resolve, reject) => {
      try {
        const user = db
          .prepare(
            `
            SELECT * FROM users
            WHERE id = ?
            `
          )
          .get(id) as AppInterfaces.IUser;

        if (!user) {
          resolve(null);
        }

        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Inserts user entity into database
   * @param {AppInterfaces.IUser} user user object
   * @returns {Database.RunResult}
   */
  export async function insert(
    user: AppInterfaces.IUser
  ): Promise<Database.RunResult> {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          db
            .prepare(
              `
                    INSERT INTO users (username, email, password, balance)
                    VALUES (@username, @email, @password, @balance)
                `
            )
            .run(user)
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Updates user entity
   * @param {AppInterfaces.IUser} user user object
   * @returns {Database.RunResult}
   */
  export async function update(
    user: AppInterfaces.IUser
  ): Promise<Database.RunResult> {
    return new Promise((resolve, reject) => {
      try {
        resolve(
          db
            .prepare(
              `
                UPDATE users
                SET
                username = @username,
                email = @email,
                password = @password,
                balance = @balance
                WHERE id = @id
            `
            )
            .run(user)
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Deletes user with specified ID
   * @param {number} id user ID
   * @returns {Database.RunResult}
   */
  export async function destroy(id: number): Promise<Database.RunResult> {
    return new Promise((resolve, reject) => {
      try {
        resolve(db.prepare("DELETE FROM users WHERE id = ?").run(id));
      } catch (err) {
        reject(err);
      }
    });
  }
}

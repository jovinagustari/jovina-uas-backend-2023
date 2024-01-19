// import database
const db = require("../config/database");
// membuat class News
class News {
  static all(callback){
    const query = "SELECT * from news";
    // Melakukan query menggunakan method query
    // Menerima 2 params: query dan callback
    db.query(query, (err, results) => {
        callback(results);
    }); 
  }
  static async create(data, callback){
      const sql = "INSERT INTO news SET ?";
      db.query(sql, data, (err, results) => {
        const id = results.insertId;
        const sql = "SELECT * FROM news WHERE id = ?";
        db.query(sql, id, (err, results) => {
          callback(results);
        })
      }); 
  }
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM news WHERE id = ?";
      db.query(sql, id, (err, resulsts) => {
        const [news] = results;
        resolve(news);
      });
    });
  }
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE news SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    const news = await this.find(id);
    return news;
  }
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM news WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
  static find(id) {
    return new Promise((resolve, reject) => {
      constsql = "SELECT * FROM news WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [news] = results;
        resolve(news);
      });
    });
  }
}

// export class News
module.exports = News;

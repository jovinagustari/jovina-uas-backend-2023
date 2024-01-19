// import Model News
const News = require("../models/News")

// buat class NewsController
class NewsController {
  async index(req, res) {
    // Tampilkan data news
    const news = await News.all();

    if (news.length > 0) {
      const data = {
        message: "Menampilkan semua News",
        data: news,
      };
      res.status(200).json(data);
    }
    else {
      const data = {
        message: "News is empty",
      };

      res.status(200).json(data);
    }
  }

  async store(req, res) {
    // Tambahkan data news
    // akan request di dalam body dan berupa nama/ {nama}
    await News.create(req.body, (news) => {
      const data = {
        message: 'Menambahkan Data News',
        data: news,
      };
      // agar responnya berupa json
      res.json(data);
    });
  }

  async update(req, res) {
    // Update data news
    const { id } = req.params;
    const news = await News.find(id);

    if (news) {
      const news = await News.update(id, req.body)
      const data = {
        message: 'Mengedit data news',
        data: news,
      };
      res.status(200).json(data);
    }

    else {
      const data = {
        message: 'News not found',
      };
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    // Hapus data news
    const { id } = req.params;
    const news = await News.find(id);

    if (news) {
      await News.delete(id);
      const data = {
        message: 'Menghapus data news',
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "News not found",
      };

      res.status(200).json(data);
    }

  }
  async show(req, res) {
    const { id } = req.params;
    const news = await News.find(id);

    if (news) {
      const data = {
        message: 'menampilkan detail news',
        data: news,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: 'Student not found',
      };

      res.status(404).json(data);
    }
  }
}
// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;

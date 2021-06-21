const axios = require("axios");

class Series {
  // metodo de funciones controladoras
  async findTopSeries() {
    let res = await axios.get(`
    https://api.themoviedb.org/3/tv/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
    return res.data;
  }
  async searchSeriesById(id) {
    let res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`
    );
    return res.data;
  }

  async searchByTitle(query) {
    let res = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=210d6a5dd3f16419ce349c9f1b200d6d&query=${query}`
    );

    return res.data;
  }

  async searchByWeek(week) {
    let res = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=210d6a5dd3f16419ce349c9f1b200d6d`
    );

    return res.data;
  }

  async searchByScreened(tvId) {
    let res = await axios.get(
      `https://api.themoviedb.org/3/tv/${tvId}/screened_theatrically?api_key=210d6a5dd3f16419ce349c9f1b200d6d`
    );

    return res.data;
  }
}

let seriesController = new Series();
module.exports = seriesController;

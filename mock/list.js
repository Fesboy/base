const Mock = require("mockjs");

const data = Mock.mock({
  "list|10-20": {
    id: "@id",
    name: "@cname",
    age: "@integer(10, 99)"
  }
});

let list = data.list;

module.exports = {
  "GET /api/getList": (req, res) => {
    res.status(200).json({
      list
    });
  }
};

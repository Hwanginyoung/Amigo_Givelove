const express = require('express');
const router = express.Router();

router.post('/login', (req, res)=>{
  console.log(req.body);
  res.json({
    scode: 200,
    message: "로그인성공"
  });
});

router.get('/search/imrimee', (req, res) => {
  console.log(req);
  res.json({
      name: '우효림',
      age: 21
  })
});

module.exports = router;
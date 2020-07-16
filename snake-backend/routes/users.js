var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());
router.options('*', cors());

const {Client} = require('pg');
const conn = new Client({
  user: 'root',
  host: 'localhost',
  database: 'myapp',
  password: 'ZXCasQ123',
  port: 5432
})
conn.connect()
let query='SELECT * FROM snakerecords ORDER BY score DESC;'

/* GET users listing. */
router.get('/', function(req, res, next) {
  conn.query(query,(err,result)=>{
    if (err){
      return res.send('No connect');
    } else{
      res.header('Access-Control-Allow-Origin', '*');
      return res.json({data:result});
    }
  })
});

router.post('/add',(req,res) => {
  conn.query(`INSERT INTO snakerecords (player,score) VALUES ('${req.body.player}','${req.body.score}')`)
  conn.query(query,(err,result)=>{
    res.header('Access-Control-Allow-Origin', '*')
    if (err){
      return res.send('No connect');
    } else{
      return res.json({data:result});
    }
  })
})

module.exports = router;

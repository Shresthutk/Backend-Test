const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Do a post request on /bfhl with your full_name,email_id and roll_no');
});

app.post('/bfhl', (req, res) => {
  const {full_name, email_id, roll_no } = req.body;
  var even='';
  var odd='';
  const upperCase=toString(full_name).toUpperCase;
  if(roll_no%2==0){even=roll_no}
  odd=roll_no;
res.json({
  "status":"Active",
  "user_id":`${full_name}_${roll_no}`,
  "email_id":email_id,
  "roll_no":roll_no,
  "even_no":even,
  "odd_no":odd,
  "uppercase":upperCase,
})
});

app.listen(80, () => {
  console.log('Listening on localhost...');
});
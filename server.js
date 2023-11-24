const mongoose = require('mongoose');
(express = require('express')), (app = express());

const port = process.env.PORT || 3000;

mongoose.connect(
    'mongodb+srv://dummy:csis3380@cluster0.2dbxp1r.mongodb.net/Exams23001'
  );

const studentSchema = new mongoose.Schema({
   name: { type: String, required: true },
   sid: { type: Number, required: true}
});

const StudentModel = mongoose.model('Quizexamrecord', studentSchema);

app.get('/', (req, res) => {
    const student1 = new StudentModel({
      name: 'Aldrin Florendo',
      sid: '300355786',
    });
  
    StudentModel.insertMany([student1]);
  
    res.send(`<h1>Document  Added</h1>`);
  });

  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
const mongoose = require("mongoose");
const QuestionModel = require("./QuestionSchema");

const fetchallQuestions = async (req, res) => {
  try {

    const {page = 1 , limit = 10 , title  ,type , anagramType} = req.query;
    const pageNumber = parseInt(page,10);
    const limitNumber = parseInt(limit,10);


    let filter = {title:{$regex:title , $options:'i'}};

    if(type){
        filter.type = type;
    }

    if(type == "ANAGRAM" && anagramType){
        filter.anagramType = anagramType;
    }

    //calculating pages
    const skip = (pageNumber -1)*limitNumber;

    const totalQuestion = await QuestionModel.countDocuments(filter);
    const totalPages = Math.ceil(totalQuestion/limitNumber);


    const questions = await QuestionModel.find(filter).skip(skip).limit(limitNumber).exec()

    console.log( "Questions are " , questions );
    console.log( "Length " , questions.length );
    
    res.json({
        currentPage: pageNumber,
        totalPages:totalPages,
        questions:questions
    })

  } catch (error) {
    console.log("Error in fetching quesions", error);
    res.status(500).json({ message: "failed to fetch questions" });
  }
};

module.exports = fetchallQuestions;

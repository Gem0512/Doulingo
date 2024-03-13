import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuizForm = () => {
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['New York', 'London', 'Paris', 'Berlin'],
      correctAnswer: 'Paris'
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      options: ['Venus', 'Saturn', 'Jupiter', 'Mars'],
      correctAnswer: 'Jupiter'
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      options: ['Venus', 'Saturn', 'Jupiter', 'Mars'],
      correctAnswer: 'Jupiter'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevQuestion = () => {
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderOptions = () => {
    return questions[currentQuestionIndex].options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
        }}
        onPress={() => handleOptionSelect(option)}
      >
        <Text style={{color: "white", width: '60%'}}>{option}</Text>
        <View
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: selectedOption === option ? '#6949FF' : 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10
          }}
        >
          {selectedOption === option && (
            <View
              style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#6949FF'
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      {currentQuestionIndex < questions.length ? (
        <View>
          <Text style={{ fontSize: 20, marginBottom: 20, color: "white" }}>
            Question {currentQuestionIndex + 1}
          </Text>
          <Text style={{ fontSize: 18, color: "white" }}>
            {questions[currentQuestionIndex].question}
          </Text>
          {renderOptions()}
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            {currentQuestionIndex > 0 && (
              <TouchableOpacity
                style={{
                  backgroundColor: '#6949FF',
                  padding: 10,
                  marginRight: 10
                }}
                onPress={handlePrevQuestion}
              >
                <Text style={{ color: 'white' }}>Prev</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={{
                backgroundColor: '#6949FF',
                padding: 10
              }}
              onPress={handleNextQuestion}
            >
              <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 20, marginBottom: 10, color: "white" }}>
            Quiz completed!
          </Text>
          <Text style={{ fontSize: 18, color: "white" }}>
            Your score is: {score} out of {questions.length}
          </Text>
        </View>
      )}
    </View>
  );
};

export default QuizForm;

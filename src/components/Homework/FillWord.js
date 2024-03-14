import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FillWord = () => {
  const questions = [
    {
      id: 1,
      question: 'She ___ to school every day.',
      correctAnswer: 'goes'
    },
    {
      id: 2,
      question: 'He ___ football in the park.',
      correctAnswer: 'plays'
    }
    // Thêm các câu hỏi khác nếu cần
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }
    setUserAnswer('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {currentQuestionIndex < questions.length ? (
        <View>
          <Text style={{ fontSize: 20, marginBottom: 20, color:'white' }}>
            Question {currentQuestionIndex + 1}
          </Text>
          <Text style={{ fontSize: 18,  color:'white'  }}>{questions[currentQuestionIndex].question}</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginTop: 10,  color:'white'  }}
            onChangeText={text => setUserAnswer(text)}
            value={userAnswer}
          />
          <Button title="Next" onPress={handleNextQuestion} />
        </View>
      ) : (
        <View>
          <Text style={{ fontSize: 20, marginBottom: 10,  color:'white' }}>
            Exercise completed!
          </Text>
          <Text style={{ fontSize: 18,  color:'white' }}>
            Your score is: {score} out of {questions.length}
          </Text>
        </View>
      )}
    </View>
  );
};

export default FillWord;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ListeningExercise = () => {
  const conversations = [
    {
      id: 1,
      title: 'At the restaurant',
      audioURL: 'URL_TO_AUDIO_FILE.mp3', // URL đến file audio
      questions: [
        {
          id: 1,
          question: 'What does the woman want to order?',
          options: ['A salad', 'A pizza', 'A burger', 'A sandwich'],
          correctAnswer: 'A salad',
        },
        {
          id: 2,
          question: 'Where does the man suggest they sit?',
          options: [
            'By the window',
            'By the door',
            'By the bar',
            'By the kitchen',
          ],
          correctAnswer: 'By the window',
        },
        // Thêm câu hỏi khác nếu cần
      ],
    },
    {
      id: 2,
      title: 'At thettt restaurant',
      audioURL: 'URL_TO_AUDIO_FILE.mp3', // URL đến file audio
      questions: [
        {
          id: 1,
          question: 'What does the woman want to order?',
          options: ['A salad', 'A pizza', 'A burger', 'A sandwich'],
          correctAnswer: 'A salad',
        },
        {
          id: 2,
          question: 'Where does the man suggest they sit?',
          options: [
            'By the window',
            'By the door',
            'By the bar',
            'By the kitchen',
          ],
          correctAnswer: 'By the window',
        },
        // Thêm câu hỏi khác nếu cần
      ],
    },
    // Thêm các cuộc hội thoại khác nếu cần
  ];

  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(conversations[currentConversationIndex].questions.length).fill(null),
  );

  const handleSelectAnswer = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextConversation = () => {
    // Kiểm tra xem tất cả câu trả lời đã được chọn chưa
    if (selectedAnswers.every(answer => answer !== null)) {
      if (currentConversationIndex + 1 < conversations.length) {
        setCurrentConversationIndex(currentConversationIndex + 1);
        setSelectedAnswers(
          Array(
            conversations[currentConversationIndex + 1].questions.length,
          ).fill(null),
        ); // Reset selected answers
      } else {
        // Nếu đã hoàn thành tất cả các cuộc hội thoại, bạn có thể thực hiện một hành động khác ở đây
      }
    } else {
      // Hiển thị thông báo hoặc thông báo lỗi nếu người dùng chưa chọn đáp án cho tất cả các câu hỏi
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, marginBottom: 20, color: 'white'}}>
        Conversation: {conversations[currentConversationIndex].title}
      </Text>
      {conversations[currentConversationIndex].questions.map(
        (question, index) => (
          <View key={question.id} style={{marginBottom: 20}}>
            <Text style={{fontSize: 16, color: 'white'}}>
              {question.question}
            </Text>
            <View style={{marginTop: 10}}>
              {question.options.map((option, optionIndex) => (
                <TouchableOpacity
                  key={optionIndex}
                  style={[
                    styles.optionButton,
                    {
                      backgroundColor:
                        selectedAnswers[index] === optionIndex
                          ? '#6949FF'
                          : '#f0f0f0',
                    },
                  ]}
                  onPress={() => handleSelectAnswer(index, optionIndex)}>
                  <Text
                    style={{
                      color:
                        selectedAnswers[index] === optionIndex
                          ? 'white'
                          : 'black',
                    }}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ),
      )}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextConversation}>
        <Text style={{color: 'white'}}>Next Conversation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default ListeningExercise;
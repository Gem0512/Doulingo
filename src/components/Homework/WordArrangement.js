import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WordArrangement = () => {
  const sentences = [
    {
      id: 1,
      words: ['She', 'goes', 'to', 'school', 'every', 'day.']
    },
    {
      id: 2,
      words: ['He', 'plays', 'football', 'in', 'the', 'park.']
    },
    // Thêm các câu khác nếu cần
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentSentence, setCurrentSentence] = useState([
    ...sentences[currentSentenceIndex].words,
  ]);
  const [correctSentences, setCorrectSentences] = useState(0);

  const handleSort = (index1, index2) => {
    const newOrder = [...currentSentence];
    [newOrder[index1], newOrder[index2]] = [newOrder[index2], newOrder[index1]]; // Swap elements
    setCurrentSentence(newOrder);
  };

  const handleNextSentence = () => {
    if (currentSentenceIndex + 1 < sentences.length) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
      setCurrentSentence([...sentences[currentSentenceIndex + 1].words]);
    } else {
      setCurrentSentenceIndex(0); // Circular rotation
      setCurrentSentence([...sentences[0].words]);
      handleCheckAnswers(); // Check answers after completing all sentences
    }
  };

  const handleCheckAnswers = () => {
    const isCorrect = JSON.stringify(currentSentence) === JSON.stringify(sentences[currentSentenceIndex].words);
    if (isCorrect) {
      setCorrectSentences(correctSentences + 1);
    } else {
      // Optionally, you can reset the sentence if it's incorrect
      setCurrentSentence([...sentences[currentSentenceIndex].words]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Arrange the sentence:</Text>
      <View style={styles.wordsContainer}>
        {currentSentence.map((word, index) => (
          <TouchableOpacity
            key={index}
            style={styles.wordButton}
            onPress={() => handleSort(index, index - 1 >= 0 ? index - 1 : index)}
          >
            <Text>{word}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextSentence}>
        <Text style={{ color: 'white' }}>Next Sentence</Text>
      </TouchableOpacity>
      {currentSentenceIndex === sentences.length && (
        <Text style={{ marginTop: 20 }}>
          Total correct sentences: {correctSentences} out of {sentences.length}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  wordButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
});

export default WordArrangement;

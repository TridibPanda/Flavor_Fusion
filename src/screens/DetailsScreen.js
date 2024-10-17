import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  // Destructure the recipe data from the route params
  const { title, description, ingredients, instructions } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 200}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      <View style={styles.listContainer}>
        {ingredients?.map((ingredient, index) => (
          <Text key={index} style={styles.listItem}>
            {ingredient}
          </Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Instructions</Text>
      <View style={styles.listContainer}>
        {instructions?.map((instruction, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {instruction}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black',
    textAlign:'center'
  },
  description: {
    fontStyle: 'italic',
    marginBottom: 20,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#444',
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default DetailsScreen;
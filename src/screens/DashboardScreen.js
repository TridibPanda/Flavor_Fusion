import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DashboardScreen = ({navigation}) => {
  const cardsData = [
    {
      id: 1,
      title: 'Creamy Tomato Pasta',
      description:
        'A classic Italian dish made with fresh tomatoes , garlic, and basil.',
      ingredients: [
        '8 oz pasta',
        '2 cups cherry tomatoes',
        '1/4 cup olive oil',
        '4 cloves garlic',
        '1 cup grated mozzarella',
        '1/4 cup chopped fresh basil',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Cook pasta according to package instructions.',
        'In a large skillet, heat olive oil over medium heat.',
        'Add garlic and cook for 1-2 minutes until fragrant.',
        'Add cherry tomatoes and cook for 3-4 minutes until they start to release their juices.',
        'Stir in mozzarella cheese until melted and well combined.',
        'Season with salt and pepper to taste.',
        'Combine cooked pasta and tomato sauce.',
        'Garnish with chopped fresh basil.',
      ],
    },
    {
      id: 2,
      title: 'Spicy Chicken Fajitas',
      description:
        'A flavorful and spicy Mexican dish made with chicken, bell peppers, and onions.',
      ingredients: [
        '1 lb boneless, skinless chicken breasts',
        '1/2 cup sliced bell peppers',
        '1/2 cup sliced onions',
        '2 cloves garlic',
        '1 tablespoon olive oil',
        '1 teaspoon ground cumin',
        '1/2 teaspoon smoked paprika',
        '1/4 teaspoon cayenne pepper',
        'Salt and pepper to taste',
        '4 small flour tortillas',
        'Optional toppings: avocado, sour cream, salsa, shredded cheese, cilantro',
      ],
      instructions: [
        'Heat olive oil in a large skillet over medium-high heat.',
        'Add chicken and cook until browned and cooked through.',
        'Add bell peppers and onions and cook until tender.',
        'Add garlic, cumin, smoked paprika, and cayenne pepper.',
        'Cook for 1-2 minutes until fragrant.',
        'Season with salt and pepper to taste.',
        'Warm tortillas by wrapping them in a damp paper towel and microwaving for 20-30 seconds.',
        'Assemble fajitas with chicken and vegetable mixture.',
        'Add desired toppings.',
      ],
    },
    {
      id: 3,
      title: 'Baked Salmon with Lemon and Herbs',
      description:
        'A healthy and flavorful fish dish made with salmon, lemon, and herbs.',
      ingredients: [
        '4 salmon fillets (6 oz each)',
        '1/4 cup olive oil',
        '2 lemons, sliced',
        '1/4 cup chopped fresh rosemary',
        '2 cloves garlic',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Preheat oven to 400°F (200°C).',
        'Line a baking sheet with parchment paper or aluminum foil.',
        'Place salmon fillets on the prepared baking sheet.',
        'Drizzle with olive oil and season with salt and pepper.',
        'Top each salmon fillet with a slice of lemon, a sprig of rosemary, and a clove of garlic.',
        'Bake for 12-15 minutes until cooked through.',
        'Serve hot and enjoy!',
      ],
    },
    {
      id: 4,
      title: 'Chicken and Vegetable Stir-Fry',
      description:
        'A quick and easy Asian-inspired dish made with chicken, vegetables, and soy sauce.',
      ingredients: [
        '1 lb boneless, skinless chicken breasts',
        '2 cups mixed vegetables (bell peppers, carrots, broccoli, snap peas)',
        '2 cloves garlic',
        '1 tablespoon vegetable oil',
        '2 tablespoons soy sauce',
        '1 tablespoon oyster sauce (optional)',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Heat vegetable oil in a large skillet or wok over medium-high heat.',
        'Add chicken and cook until browned and cooked through.',
        'Add mixed vegetables and cook until tender.',
        'Add garlic and cook for 1 minute until fragrant.',
        'In a small bowl, whisk together soy sauce and oyster sauce (if using).',
        'Pour the sauce over the chicken and vegetables.',
        'Cook for an additional 1-2 minutes until the sauce is bubbly and slightly thickened.',
        'Season with salt and pepper to taste.',
        'Serve hot over rice or noodles.',
      ],
    },
    {
      id: 5,
      title: 'Classic Cheeseburger',
      description:
        'A classic American dish made with ground beef, cheese, and toppings.',
      ingredients: [
        '1 lb ground beef',
        '1/2 cup grated cheddar cheese',
        '1/4 cup grated mozzarella cheese',
        '1/4 cup chopped onion',
        '2 cloves garlic, minced',
        '1 tablespoon Worcestershire sauce',
        '1 teaspoon salt',
        '1/2 teaspoon black pepper',
        '4 hamburger buns',
        'Optional toppings: lettuce, tomato slices, pickles, ketchup, mustard, mayonnaise',
      ],
      instructions: [
        'In a large bowl, combine the ground beef, grated cheddar cheese, grated mozzarella cheese, chopped onion, minced garlic, Worcestershire sauce, salt, and black pepper. Mix until just combined; avoid overmixing to keep the burgers tender.',
        'Divide the beef mixture into 4 equal portions and shape them into patties. Make a slight indentation in the center of each patty to help them cook evenly.',
        'Preheat a grill or skillet over medium-high heat. Cook the patties for about 4-5 minutes on one side, then flip and cook for another 3-4 minutes, or until they reach your desired level of doneness. If using cheese, add a slice to each patty during the last minute of cooking to melt.',
        'While the patties are cooking, you can toast the hamburger buns on the grill or in a toaster until golden brown.',
        'Place each cooked patty on a toasted bun. Add your desired toppings, such as lettuce, tomato slices, pickles, ketchup, mustard, and mayonnaise.',
        'Serve the cheeseburgers hot with your favorite sides, such as fries or a salad.',
      ],
    },
  ];
  const handleCardPress = (title, description) => {
    // Navigate to Details screen and pass card data
    navigation.navigate('Details', {title, description});
  };

  return (
    <View style={styles.container}>
      {cardsData.map(card => (
        <TouchableOpacity
          key={card.id}
          style={styles.card}
          onPress={() => navigation.navigate('Details', card)}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default DashboardScreen;

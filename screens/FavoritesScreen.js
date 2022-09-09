import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealList from '../components/MealsList/MealList';
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContain}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

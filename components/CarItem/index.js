import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
  const {name, tagling, taglingCTA, image} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.subtitle}>
          {tagling} {' '}
          <Text style={styles.subtitleCTA}>{taglingCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.warn('C ustom Order was pressed');
          }}
        />

        <StyledButton
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

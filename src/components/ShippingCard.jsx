import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ShippingCard({ shipping }) {
    console.log(shipping.name);
    
  return (
    <View styles={styles.container}>
      <View styles={styles.left}>
        <Text>{shipping.name}</Text>
        <Text>max pallets number: {shipping.max_pallets_number}</Text>
        <Text>max weight: {shipping.max_weight}</Text>
      </View>
      <View styles={styles.right}>
        <Text>{shipping.date}</Text>
        <Text>max pallets number: {shipping.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        backgroundColor:'red'
        
    },
    left:{

    },
    right:{

    }
});

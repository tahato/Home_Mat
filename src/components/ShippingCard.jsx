import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ShippingCard({ shipping }) {
const navigation = useNavigation()
const nav =()=>{
   navigation.navigate('ShippedBills', {
     id: String(shipping.id),
   });
}
  return (
    <TouchableOpacity style={styles.container} onPress={nav}>
      <View style={styles.left}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
          {shipping.name}
        </Text>
        {/* <View style={styles.info}>
          <Text>max pallets number:</Text>
          <Text style={styles.text}> {shipping.max_pallets_number}</Text>
        </View>
        <View style={styles.info}>
          <Text>max weight: </Text>
          <Text style={styles.text}>{shipping.max_weight}</Text>
        </View> */}
      </View>
      <View style={styles.right}>
        <Text style={styles.text}>{shipping.date}</Text>
        <Text style={styles.text}>{shipping.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ffffff',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding:10,
    margin:5,
    borderRadius:10,
    elevation:7,

  },
  left: {},
  right: {alignItems:'flex-end'},
  text: {
    fontSize:14,
    fontWeight:'semibold'
  },
  info: {
    flexDirection:'row',
    gap:2
  },
});

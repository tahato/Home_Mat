import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getShippingDetails } from '../api/getShippingDetails';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '../context/GlobaleProvider';
import moment from 'moment';

export default function ShippingDetails({ route }) {
  const { id } = route.params;
  const [shipping, setShipping] = useState();
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setProjectName } = useGlobalContext();
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );
  const fetchData = async () => {
    try {
      const data = await getShippingDetails(parseInt(id));
      setShipping(data);
      setDeliveries(data?.deliveries);
      console.log(data?.deliveries.length);
      setProjectName(data.name);
      setLoading(false);
    } catch (e) {
      console.log('error get project', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {moment(shipping?.date).format('DD/MM/YYYY')}{' '}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: '#00C853' }}
            >
              {shipping?.status}{' '}
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.titleFact}> Factures </Text>
            {deliveries.length != 0 ? (
              <ScrollView>
                {deliveries.map((delivery, i) => (
                  <View key={i} style={styles.bill}>
                    <Text style={styles.billText}>
                      Facture N°:{' '}
                      {delivery?.bill?.['number' + delivery?.bill?.level]}{' '}
                    </Text>
                    <Text style={styles.billText}>
                      Ajouté le{' '}
                      {moment(delivery?.pivot.set_date).format('DD/MM/YYYY')}{' '}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            ) : (
              <View>
                <Text style={{ textAlign: 'center', padding: 10 }}>
                  Pas de Facture assossié{' '}
                </Text>
              </View>
            )}
          </View>
          <View>
            <Text style={styles.title}>Poids:</Text>
            <View style={styles.bar}>
              <View style={styles.percent}></View>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Nombre de Palletes:</Text>
            <View style={styles.bar}>
              <View style={styles.percent}></View>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  bill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    // borderWidth:1,
    // borderColor:'lightgray'
  },
  billText: {
    fontSize: 15,
    fontWeight: 'semibold',
  },
  titleFact: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
  },

  bar: {
    width: '100%',
    height: 15,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    marginVertical: 10,
  },
  percent: {
    width: '75%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#00C853',
  },
});

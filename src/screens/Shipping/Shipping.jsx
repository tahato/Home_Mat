import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { getShippings } from '../../api/getShippings';
import  ShippingCard  from '../../components/ShippingCard';
import axios from 'axios';
import { API_URL } from '../../api/apiUrl';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getItem } from '../../../tools/AsyncStorage';
import { company_code } from '../../api/apiUrl';

export default function Shipping() {
  const [lastPage, setLastPage] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState();

  const fetchData = useCallback(
    async (reset = false) => {
      const token = await getItem('token');
      setToken(token);
      if (loading || !token) return;
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/api/homemat/shippings`, {
          params: {
            company_code: company_code,
            page: reset ? 1 : page,
            // search: search || '',
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { data, last_page } = res.data[0];
        setLastPage(last_page);

        setData(prev =>
          reset
            ? data
            : [
                ...prev,
                ...data?.filter(p => !prev.some(old => old.id === p.id)),
              ],
        );

        setPage(prev => (reset ? 2 : prev + 1));
      } catch (err) {
        console.log(
          'Error fetching data:',
          err?.response?.status,
          err?.message,
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [page, token, loading],
  );

  // ✅ Initial load
  useEffect(() => {
    fetchData(true);
  }, [token]);
  

  // ✅ Search effect (with delay)
  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     fetchData(true);
  //   }, 500);
  //   return () => clearTimeout(delay);
  // }, [search]);

  // ✅ Pull-to-refresh
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData(true);
  }, [fetchData]);

  return (
    <SafeAreaView style={{backgroundColor:'#ffffff',flex:1}}>
      <Text style={{textAlign:'center',padding:5,fontSize:18,fontWeight:'bold' }}>Expéditions </Text>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      ) : (
        <FlatList
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 40, gap: 20 }}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ShippingCard shipping={item} />}
          onEndReached={() => {
            if (!loading && page <= lastPage) fetchData();
          }}
          onEndReachedThreshold={0.5}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListFooterComponent={
            loading ? (
              <ActivityIndicator
                size="large"
                color="#000"
                style={{ marginVertical: 20 }}
              />
            ) : null
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

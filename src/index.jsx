import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../tools/AsyncStorage';

export default function index() {
  const navigation=useNavigation();

  const getToken = async () => {
    const token = await getItem('token');
    navigation.navigate(!!token ? 'HomeNavigation' : 'login');
    //  router.replace('/login');
  };
  useEffect(() => {
    getToken();
  }, []);

  return null;
}

const styles = StyleSheet.create({});

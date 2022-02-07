import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface item {
    description: string
    id: string
    image: string
    resultType: string
    title: string
}

interface MovieItemProps {
    item: item
 }

const MovieItem = (props: MovieItemProps) => {
    const { item } = props
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Detail', { item })} style={{ padding: 10, backgroundColor: 'white', marginTop: 20, borderRadius: 10, flexDirection: 'row' }}>
            <Image source={{ uri: item.image }} style={{ height: 100, width: '20%', borderRadius: 5 }} />
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.dsc}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieItem;

const styles = StyleSheet.create({
    container: {},
    title: { fontWeight: 'bold' },
    dsc: { fontSize: 12, marginTop: 10 },
});

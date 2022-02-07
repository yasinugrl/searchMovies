import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { SET_FAVORITES } from '../actions/types';
import Storage from '../utils/Storage';

interface DetailProps { }

const Detail = (props: DetailProps) => {
    const { item } = props.route.params
    const [favorites, setFavoreites] = React.useState([])
    const [hiddenData, setHiddenData] = React.useState([])
    const [isFavori, setIsFavori] = React.useState(false)
    const [isHidden, setHidden] = React.useState(false)

    const dispatch = useDispatch()

    React.useEffect(() => {
        Storage.FavoritesData.get().then(response => {
            let current = response || []
            const isF = current.filter(f => f.id == item.id)
            setFavoreites(current)
            dispatch({ type: SET_FAVORITES, payload: current })
            setIsFavori(isF.length > 0)
        });

        Storage.HiddenData.get().then(response => {
            let current = response || []
            setHiddenData(current)
            const isF = current.filter(f => f == item.id)
            console.log('currentcurrentcurrent: ', current);
            setHidden(isF.length > 0)
        });
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: item.image }} style={{ width: '80%', height: '60%' }} resizeMode='contain' />
            <View style={{ width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.dsc}>{item.description}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (!isFavori) {
                            setIsFavori(true)
                            let current = favorites
                            current.push(item)
                            Storage.FavoritesData.set(current)
                        }
                    }}
                >
                    <Image source={require('../assets/icons/love.png')} style={{ width: 30, height: 30, tintColor: isFavori ? 'red' : 'gray' }} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        if (!isHidden) {
                            setHidden(true)
                            let current = hiddenData
                            current.push(item.id)
                            console.log('asd: ', current);
                            Storage.HiddenData.set(current)
                        }
                    }}
                >
                    <Image source={require('../assets/icons/hidden.png')} style={{ width: 30, height: 30, tintColor: isHidden ? 'red' : 'gray' }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    title: { fontWeight: 'bold' },
    dsc: { fontSize: 12, marginTop: 10 },
});

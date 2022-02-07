import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions';
import { SET_FAVORITES } from '../actions/types';
import MovieItem from '../components/MovieItem';
import SearchInput from '../components/SearchInput';
import Storage from '../utils/Storage';
import NetInfo from "@react-native-community/netinfo";

interface MoviesProps { }

const Movies = (props: MoviesProps) => {
    const [query, setQuery] = React.useState('')
    const [isConnect, setIsConnect] = React.useState(true)
    const [moviesData, setMoviesData] = React.useState([])
    const dispatch = useDispatch()
    const { movies, loading } = useSelector(state => state.moviesResponse)

    React.useEffect(() => {
        Storage.FavoritesData.get().then(response => {
            let current = response || []
            dispatch({ type: SET_FAVORITES, payload: current })
        });
    }, [])

    React.useEffect(() => {
        NetInfo.addEventListener(state => {
            console.log("Is connected?", state.isConnected);
            setIsConnect(state.isConnected)
        });
    }, [])

    React.useEffect(() => {
        if (movies) {
            let newData = []
            Storage.HiddenData.get().then(response => {
                movies.map(data => {
                    const filterId = response.filter(f => data.id == f)
                    if (filterId.length == 0) {
                        newData.push(data)
                    }
                })
                setMoviesData(newData)
            });
        }
    }, [movies])

    return (
        <SafeAreaView style={styles.container}>
            
           {!isConnect ?
            <Text style={{ marginTop: 20, fontSize: 12, textAlign: 'center' }}>Please check your internet connection...</Text>:
            <>
                <SearchInput
                    onChangeText={(val) => {
                        setQuery(val)
                        if (val.length > 3) {
                            dispatch(getMovies(val))
                        } else if (val.length == 0) {
                            dispatch(getMovies(''))
                        }
                    }}
                    value={query}
                    placeholder='Search Movies...'
                />

                {loading ?
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator />
                    </View>
                    :
                    <FlatList
                        data={moviesData}
                        ListEmptyComponent={() => <Text style={{ marginTop: 20, fontSize: 12, textAlign: 'center' }}>Please search a movies...</Text>}
                        renderItem={({ item }) => <MovieItem item={item} {...props} />}
                        keyExtractor={item => item.id}
                        style={{ width: '90%' }}
                        showsVerticalScrollIndicator={false}
                    />}
            </>}

        </SafeAreaView>
    );
};

export default Movies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});

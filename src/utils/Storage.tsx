
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
	FavoritesData: {
		get: async () => {
			const favorites = await AsyncStorage.getItem('favorites');
			return JSON.parse(favorites);
		},
		set: (data: any) => {
			return AsyncStorage.setItem('favorites', JSON.stringify(data));
		},
		remove: () => {
			return AsyncStorage.removeItem('favorites');
		},
	},
	HiddenData: {
		get: async () => {
			const dontShow = await AsyncStorage.getItem('dontshow');
			console.log('dontShow: ', dontShow);
			
			return JSON.parse(dontShow);
		},
		set: (data: any) => {
			return AsyncStorage.setItem('dontshow', JSON.stringify(data));
		},
        remove: () => {
			return AsyncStorage.removeItem('dontshow');
		},
	}
};

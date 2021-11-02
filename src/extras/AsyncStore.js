import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AsyncStore{
    async storeData(key,value){
        try{
            await AsyncStorage.setItem(key,value)
        }catch(e){
            console.log("Error",e)
            return false
        }
    }

    async getData(key){
        try{
           return await AsyncStorage.getItem(key)
        }catch(e){
            console.log("Error",e)
            return false
        }
    }
}
import { AsyncStorage } from 'react-native';
export const FIRST_OPEN = 'FIRST_OPEN';

//Create dataStorage
const saveDataToStorage = (name, data) => {
  AsyncStorage.setItem(
    name,
    JSON.stringify({
      data,
    })
  );
};

export const fetchuser = async() =>{
 
 

    try {    
      const value = await AsyncStorage.getItem('logged_user');
          if (value !== null) { 
           
            // console.log("data format",JSON.parse(value))
            return JSON.parse(value)
          } 
         }
         
    catch (error) { 
      console.log(error.message)
    }

}

export const saveUserToStorage = (name, data) => {
  // alert("data:"+data.first_name)
  AsyncStorage.setItem(
    name,
    JSON.stringify({
      data,
    })
  );

};


//Check first Open
export const firstOpen = () => {
  
  saveDataToStorage('isFirst', true);

};

export const removeFirstOpen = (name, data) => {
  
  AsyncStorage.mergeItem(
    name,
    JSON.stringify({
      data,
    })
  );
};
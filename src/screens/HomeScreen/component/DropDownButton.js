import React from 'react'
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import {View,ScrollView} from 'react-native'

export const TypeDropDown = () => {
    let data = [
        {      value: 'Jacket',    },
        {      value: 'Trouser',    },
        {      value: 'Tshirt',    },
        {      value: 'Socks',    },
        {      value: 'Socks',    },
    ];
    const onChangeHandler = (value) => {
        console.log(`Selected value: ${value}`);
      }

    return(
        <ScrollView>
            <Dropdown
            data={data}
            label="Swap With"
            icon="arrow"
            onChangeText={value=>onChangeHandler(value)}
            /> 
        </ScrollView>
         
		)
    
}
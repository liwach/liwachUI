import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from "../../../utils/colors";
import { getAllTypes,getOneTypeByName } from "../../../routes/TypeApi";
import axios from "axios";
import { GET_ONE_TYPE } from "../../../routes/urls";


export const TypeSeachBox = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items,setItems] = useState([])
    const [types,setTypes] = useState(null)
    
    const fetchData = async () => {
        const item_list = await getAllTypes()
        const types = item_list.map(function(data, idx){
            const name = data.name
            return(
             { label:name,value:name}
            )
            })
        console.log("Item_list",types)
        setItems(types)
    }
  
      useEffect(() => {
        fetchData();
      }, []);

    return (
      <DropDownPicker
      style={{ 
        backgroundColor:"transparent",
        borderBottomWidth:0.5,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        fontSize: 12
      }}
        open={open}
        value={value}
        searchable={true}
        searchablePlaceholder="Search..."
        onChangeSearchText={async(text) => {
            // Show the loading animation
            // setLoading(true);
          
            // Get items from API
            // const items = await getOneTypeByName({text})
            // setItems(items)
            //   API.get(GET_ONE_TYPE, {
            //   text
            // })
            axios.post(GET_ONE_TYPE, text,{
                "headers": {
                "content-type": "application/json",
                },
                })
              .then((items) => {
                const types = item_list.map(function(data, idx){
                    const name = data.name
                    return(
                     { label:name,value:name}
                    )
                    })
                console.log("Item_list",types)
                setItems(types)
            })
              .catch((err) => {
                //
              })
              .finally(() => {
                // Hide the loading animation
                // setLoading(false);
              });
          }}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        mode={"BADGE"}
        placeholder={"Select Category"}
        placeholderStyle={
          {
            fontSize:15,
            textAlign:'center'
          }
        }
        dropDownContainerStyle={
            {
               marginRight:20,
               backgroundColor:colors.bottomNav,
               borderWidth:0.5,
               borderColor:colors.bottomNav,
               elevation:3
               
            }
        }
        listItemContainer={{
          height: 40,
          backgroundColor:colors.bottomNav

        }}
        listParentLabelStyle={{
            fontWeight: "bold",
             marginRight:20
          }}

        customItemContainerStyle={{
            width: 10,
            marginRight:20,
            backgroundColor:colors.bottomNav
        }}
        
        
        
      />
    );
  }
  
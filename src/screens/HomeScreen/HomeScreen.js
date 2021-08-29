import React,{useEffect, useRef} from 'react'
import {View, Text, ScrollView, StyleSheet,Button,TextInput,AsyncStorage} from 'react-native'

import {HeroImage} from './component/HeroImage'
import {CategoryList} from './component/FlatListItem'
import { Section } from './component/SectionList'
import { colors } from '../../utils/colors'
import RBSheet from "react-native-raw-bottom-sheet";
import { FloatingMenu } from 'react-native-floating-action-menu';
import { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { removeFirstOpen } from '../../utils/checkFirstTimeActions'
export const HomeScreen = ({navigation}) => {
   
   
    const [isMenuOpen, setMenuOpen] = useState(false)

    const items = [
        { label: 'Add Service', icon :"home-repair-service" },
        { label: 'Add Item', icon : "shopping-basket" },
      ];
   
   useEffect(()=>{
    removeFirstOpen("isFirst",false)
   },[])

    const handleMenuToggle = isMenuOpen =>
    setMenuOpen(isMenuOpen);
  
    const handleItemPress = (item, index) =>{
        item.label == "Add Item"? navigation.navigate("Add Product"): navigation.navigate("Add Service")
        console.log('pressed item', item.label);
    }
     

    const renderMenuIcon = (isMenuOpen) => {
        const { menuButtonDown } = isMenuOpen;
        console.log(isMenuOpen)
        return menuButtonDown
          ? <Ionicons name={"add"} />
          : <Ionicons name={"add"} />;
      }

      const renderItemIcon = (item, index, menuState) => {
        const { itemsDown, dimmerActive } = menuState;
    
      
        item.icon == "home-repair-service"? ()=> {return <FontAwesome size={20} color={colors.flord_intro} name={"home-repair-service"}/>} : ()=> {return <FontAwesome name={"home-repair-service"}/>}
        console.log(item.icon)
      };

    return(
        <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background}}
        > 
            <HeroImage navigation={navigation}/>
            <View style={styles.horizontal}>
            <Text style={styles.text}>Latest Goods</Text>
            <Text style={[styles.text,styles.subtext]}>View All</Text>
            <Ionicons name={"arrow-forward"} size={20} color={colors.flord_intro2} style={styles.icon}/>
            </View>
            
            <Section navigation={navigation}  />
            
            <View style={styles.horizontal}>
            <Text style={styles.text}>Latest Services</Text>
            <Text style={[styles.text,styles.subtext]}>View All</Text>
            <Ionicons name={"arrow-forward"} size={20} color={colors.flord_intro2} style={styles.icon}/>
            </View>

            <Section navigation={navigation} />
            {/* <View style={styles.container}> */}
            <FloatingMenu
                items={items}
                isOpen={isMenuOpen}
                onMenuToggle={handleMenuToggle}
                onItemPress={handleItemPress}
                backgroundDownColor={colors.flord_intro2}
                backgroundUpColor={colors.flord_intro2}
                primaryColor={colors.flord_intro2}
            
                borderColor={colors.flord_intro2}
                renderMenuIcon={renderMenuIcon}
                renderItemIcon ={renderItemIcon}
                buttonWidth={45}
                position= {"bottom-right"}
                top={50}
                />
            {/* </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    HeroContainer:{
        position:'relative'
    },
    text:{
        margin:10,
        fontSize:18,
        color: colors.flord_intro,
        textTransform:"uppercase",
        flex:1,
        justifyContent:'flex-end'
    },
    subtext:{
      textAlign:'right',
      fontSize:15,
      textDecorationLine:'underline',
      color: colors.flord_intro2
    },
    title:{
        fontSize:12
    },
    horizontal:{
        flexDirection:'row',
    },

    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
      },
      icon:{
          top:9,
          right:10
      }
})


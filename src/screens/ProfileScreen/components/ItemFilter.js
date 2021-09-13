import React,{useState,useEffect} from "react"
import DropDownPicker from 'react-native-dropdown-picker';
import { getItemsByStatus } from "../../../routes/itemsApi";
import { colors } from "../../../utils/colors";

export const ItemFilter = ({value,setValue,filteredData, setFilteredData}) => {
  const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
  
  const [items, setItems] = useState([
    {label: 'All', value: 'All'},  
    {label: 'Bartered', value: 'bartered'},
    {label: 'Unbartered', value: 'unbartered'}
  ]);

  const fetchData = async() => {
         //neither, All
         if(value=="All"){
            setFilteredData(filteredData)
         }
        //bartered items
        if(value=="bartered"){
            const items = await getItemsByStatus("bartered").then((resp)=>{
                console.log("Response from filter",resp)
                
                    const listItems = resp.map(function(item, idx){
                        setFilteredData(filteredData => [...filteredData,item])
                      })
                
               
               
            })
        }
        //unbartered items
        if(value=="unbartered"){
            const items = await getItemsByStatus("open").then((resp)=>{
                console.log("Response",resp)
                const listItems = resp.map(function(item, idx){
                  setFilteredData(filteredData => [...filteredData,item])
                })
            })
        }
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
    <DropDownPicker
    style={{ 
        
        backgroundColor:colors.light_grey,
        marginTop:10,
        width: 200,
        alignSelf:'flex-end',
        borderBottomWidth:0,
          borderTopWidth:0,
          borderLeftWidth:0,
          borderRightWidth:0
        }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeValue={(value)=>{
          alert(value)
      }}
      placeholder={"Filter"}
        placeholderStyle={
          {
            fontSize:15,
            textAlign:'center'
          }
        }
        dropDownContainerStyle={
            {
               marginRight:20,
               backgroundColor:colors.light_grey,
               borderWidth:0.5,
               borderColor:colors.light_grey
              
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
            backgroundColor:colors.white
        }}
        
    />
  );
}
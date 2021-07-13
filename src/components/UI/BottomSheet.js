import React, { useRef } from "react";
import { View, Button,TextInput } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";


export const CustomBottomSheet = () => {
    const refRBSheet = useRef();
    
    renderItem = (item, index) => (
        <View>
          <Button title={`OPEN BOTTOM SHEET-${index}`} onPress={() => this[RBSheet + index].open()} />
          <RBSheet
            ref={ref => {
              this[RBSheet + index] = ref;
            }}
          >
            <YourOwnComponent onPress={() => this[RBSheet + index].close()} />
          </RBSheet>
        </View>
      );

      return(
       
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000"
            }}
          >
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent"
                },
                draggableIcon: {
                  backgroundColor: "#000"
                }
              }}
            >
              <TextInput />
            </RBSheet>
          </View>
    
      )

}
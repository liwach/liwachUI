import { View, TouchableOpacity, Text } from 'react-native'
import { Root, Popup } from 'popup-ui'

export const CustomModal = ()=>{
  return(
              <Root>
              <View>
                  <TouchableOpacity
                      onPress={() =>
                        Popup.show({
                          type: 'Success',
                          title: 'Upload complete',
                          button: false,
                          textBody: 'Congrats! Your upload successfully done',
                          buttonText: 'Ok',
                          callback: () => Popup.hide()
                        })
                      }
                  >
                      <Text>Open Popup</Text>
                  </TouchableOpacity>
              </View>
          </Root>
  )
}



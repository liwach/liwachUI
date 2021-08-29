import React, { Component } from 'react'
import axios from 'axios'
import { MAPBOX_KEY } from '../../../utils/config'
import { View, TextInput,Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { colors } from '../../../utils/colors'


const FlatListItem = ({ item, onPress }) => (

  <TouchableOpacity onPress={onPress}>
      <Text style={{color:"black"}}>{item.place_name}</Text>
  </TouchableOpacity>

)


const renderItem = ({ item }) => {
  // const backgroundColor = item.id === selectedId ? colors.primary : colors.peach;
  // const color = item.id === selectedId ? colors.white : colors.primary;
  return(
    <FlatListItem
      item={item}
      
      onPress={() => alert(item.id)}
     
    />
  )
}


export default class AutocompletePlace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      results: [],
      isLoading: false,
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)

    if (!MAPBOX_KEY) {
      throw new Error("You don't have any 'pMAPBOX_API_KEY'")
    }
  }
  
  handleSearchChange(e) {
    this.setState({
      search: e.target.value,
      isLoading: true
    })

    // Stop the previous setTimeout if there is one in progress
    clearTimeout(this.timeoutId)

    // Launch a new request in 1000ms
    this.timeoutId = setTimeout(() => {
      this.performSearch()
    }, 1000)
  }
  performSearch() {
    if (this.state.search === "") {
      this.setState({
        results: [],
        isLoading: false
      })
      return
    }
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.search}.json?types=place&access_token=pk.eyJ1IjoibGl3YWNoIiwiYSI6ImNrcmhjZmZqNDBpNWQycHBnMGNpeDN1dW4ifQ.gWe-VTYxuBeEHNEwc1eY_w`)
      .then(response => {
        this.setState({
          results: response.data.features,
          isLoading: false
        })
      })
  }
  handleItemClicked(place) {
    this.setState({
      search: place.place_name,
      results: []
    })
    this.props.onSelect(place)
  }
  render() {
    return (
      <View className="AutocompletePlace">
        <TextInput className="AutocompletePlace-input" placeholderTextColor={colors.flord_intro} type="text" value={this.state.search} onChangeText={this.handleSearchChange} placeholder="Type an address" />
        <FlatList 
        
        className="AutocompletePlace-results"
        data={this.state.results}
        renderItem={renderItem}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        >
          
          {this.state.isLoading && <Text className="AutocompletePlace-items">Loading...</Text>}
        </FlatList>
      </View>
    )
  }
}
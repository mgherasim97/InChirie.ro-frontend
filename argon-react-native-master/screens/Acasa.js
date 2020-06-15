import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text, TouchableWithoutFeedback, Image,Button } from 'react-native';
import { Block, theme } from 'galio-framework';
import {Anca} from './Autentificare';
import { Card } from '../components';
import articles from '../constants/articles';
import axios from 'axios';
import { argonTheme } from '../constants';
const { width } = Dimensions.get('screen');


const params = {
            title: "",
            price: "",
            rooms: "",
            totalArea: "",
            usableArea: "",
            orientation: "",
            year: "",   
            floors: "",
            floorsBuilding:"",
            propertyType:"",
            location: "",  
            errors: {},          // Store error data from the backend here 
            isAuthorized: false, // If auth is successful, set this to `true`
            isLoading: false,
            dataSet : [],
            headers: {}    
            
           };

const data = [
  {
    uri: 'https://i.imgur.com/9QlOVC5.jpg',
    title: 'Ilicea Anca Ștefania - "Da-mi bag picioarele!"',
    content: 'Șefa echipei de frontend, nu vrei sa o superi.'
  },
  {
    uri: 'https://i.imgur.com/DN2njLs.jpg',
    title: 'Sava Vasile Daniel - "Noi la MDS când mai lucrăm?"',
    content: 'O minte sclipitoare, coordonator neoficial al proiectului și programator pe backend.'
  },
  {
    uri: 'https://i.imgur.com/yqR5PPp.jpg',
    title: 'Negru Luiza - "Morții lui de laptop!"',
    content: 'Plină de idei, voie bună și dorință de a învăța, programator de backend.'
  },
  {
    uri: 'https://i.imgur.com/VtO3zqE.jpg',
    title: 'Gherasim Mihai - "Acum termin testele... acum..."',
    content: 'Inima echipei, cel mai bun dintre cei mai buni. Sclavul Ancăi pe frontend.'
  }
];

class Acasa extends React.Component {

  state = params;
 
  componentWillMount(){

    this.state.headers = Anca()
    console.log("--------------------------------")
    console.log(Anca());
    console.log("--------------------------------")
    axios.get("http://192.168.0.100:8080/advert/getAdverts",this.state.headers
    )
    
    .then((response) => {
      console.log("-------------------------")
      //console.log(response)
      console.log("-------------------------")
      console.log("ok update")
      const dataSet = response.data;
      this.setState({ dataSet });
      console.log("-------------------------")
    
      
    })

    .catch((error) => {
      console.log(error)
      console.log("eroare update")
    })

  }



  render() {
    const cardContainer = [styles.myStyle, styles.shadow];
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];

    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (

       <Block flex center style={styles.home}>  
          <ScrollView> 
                  <Block>
                      { this.state.dataSet.map(user => 
                            <Block style={cardContainer}>
                            <Image source={{uri:'https://nuscocitta.ro/wp-content/uploads/2018/08/Living_-_2592_-_Gospodinov_-_IMG_1523.jpg',}}  style={styles.tinyLogo}/>
                            {/* <Image source={{uri: item.image}}/> */}
                            <Block flex space="between" style={styles.cardDescription}>
                            <Text size={20} style={styles.cardTitle}>{user.title}</Text>
                            <Text size={14} style={styles.cardTitle}  bold>Pret: {user.price}</Text>
                            <Text size={14} style={styles.cardTitle}>Numar camere: {user.rooms}</Text>
                            <Text size={12}   bold>Locatie: {user.location}</Text>
                            <Text size={12}  style={{ color: 'green' }} bold>DISPONIBIL</Text>
                            </Block>
                            </Block>
                      )}
                  </Block>
          </ScrollView>
       </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
    cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 1,
    fontWeight: "bold"
  },
  imageStyles: {
    width: width - theme.SIZES.BASE 
  },
  myStyle: {
    marginTop: 17,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    width: width - 10
  },
  tinyLogo: {
    width: 100,
    height: 100,
  
  }
  ,
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },

});

export default Acasa;

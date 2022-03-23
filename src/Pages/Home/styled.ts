import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from '../../config/colors'

const {height,width} = Dimensions.get("window")
export const Container = styled.SafeAreaView`
flex:1;
`
export const FlatListContainer = styled.ScrollView`
width:95%;
height:${height+"px"};
align-self:center ;
`
export const Wrapper = styled.ScrollView`
width:95%;
height:${height+"px"};
align-self:center ;
`
export const FlatList = styled.FlatList`
/* background-color: red; */
margin-bottom:10px ;
`


export const Bottom = styled.View`
width:100%;
height:250px ;
background-color:${colors.green};
justify-content: space-evenly;
align-items:center ;
`
export const Logo = styled.Image`
/* width:90px; */
/* height:50px; */
`
export const Message = styled.Text`
width:80%;
text-align:center ;
color:${colors.white} ;
font-weight:bold;
`
export const Button = styled.TouchableOpacity`
width:80%;
height:60px;
background-color:orange;
border-radius:7px;
justify-content: center;
align-items:center ;
`
export const Title = styled.Text`
color:${colors.white} ;
font-size: 14px;
font-weight:bold;
`

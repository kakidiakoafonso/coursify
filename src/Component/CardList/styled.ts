import styled from "styled-components/native";
import colors from '../../config/colors'
export const Container = styled.SafeAreaView`
/* flex:1; */
width:100%;
height:360px;
padding-top:10px ;
margin-bottom:15px ;
/* background-color:red ; */
`
export const TitleMoreContainer = styled.View`
width:95%;
height:50px;
align-self:center ;
/* background-color: pink; */
justify-content:space-between;
align-items: center;
flex-direction:row;
`
export const MoreContainer = styled.TouchableOpacity`
width:30%;
height:40px;
justify-content:space-between;
align-items: center;
flex-direction:row;
/* background-color:yellow ; */
`
export const Title = styled.Text`
color:${colors.green80} ;
font-size: 20px;
font-weight:bold;
/* background-color: red; */
width: 70%;
`
export const More = styled.Text`
color:${colors.grey};
`
export const FlatList = styled.FlatList`

`



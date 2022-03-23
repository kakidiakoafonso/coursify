import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../config/colors";

const CARD_SIZE = Dimensions.get("window").width/1.6
export const Container = styled.TouchableOpacity`
/* width: ${CARD_SIZE+"px"}; */
width: 250px;
height: 300px;
border:1px solid ${colors.grey};
background-color:${colors.white} ;
border-radius:10px ;
margin-right:20px;
`
export const Image = styled.Image`
width: 100%;
height: 40%;
border-top-left-radius:10px ;
border-top-right-radius:10px ;
`
export const TextContainer = styled.View`
width: 100%;
height: 60%;
/* background-color:red ; */
justify-content:space-between ;
`
export const TitleContainer = styled.View`
width: 95%;
align-self:center ;
height: 40%;
/* background-color:pink ; */
justify-content:center ;
`
export const Title = styled.Text`
color:${colors.green};
width:95%;
font-size:20px;
font-weight:bold ;
/* background-color:red ; */

`
export const MessageContainer = styled.View`
width: 95%;
height:40%;
align-self:center ;
/* align-items:flex-start ;
justify-content: center;
font-size:15px ; */
/* background-color:blue ; */
`
export const Message = styled.Text`
color:${colors.grey};
font-size:13px;
font-weight:bold ;
`
export const MaisContainer = styled.View`
width: 95%;
align-self:center ;
height: 20%;
justify-content:center ;
/* background-color:yellow; */
`
export const TextMais = styled.Text`
color:${colors.orange};
font-size:13px;
font-weight:bold ;
`
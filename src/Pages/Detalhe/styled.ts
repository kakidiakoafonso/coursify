import styled from "styled-components/native";
import colors from "../../config/colors";

export const Container = styled.SafeAreaView`
flex:1;
background-color:${colors.white} ;
`
export const TopContainer = styled.View`
width:100%;
background-color:${colors.white} ;
align-items: center;
justify-content:space-evenly ;
`
export const Title = styled.Text`
color:${colors.green};
font-size:22px;
font-weight:bold;
text-align: center;
width:80%;
margin-top:10px;
margin-bottom:10px;
`
export const Image = styled.Image`
width:90%;
border-radius:10px;
height:150px;
`
export const MessageContainer = styled.View`
flex:1 ;
`
export const MessageWrapper = styled.View`
width:90%;
height:100%;
/* background-color:yellow; */
align-self:center ;
`
export const Message = styled.Text`
color:${colors.grey};
`
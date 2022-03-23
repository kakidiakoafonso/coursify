import { StatusBar } from 'expo-status-bar';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as S from "./styled"
import Home from './Pages/Home/Index';
import Detalhe from './Pages/Detalhe/Detalhe';    
import { Entypo } from '@expo/vector-icons';

const {Navigator,Screen} = createNativeStackNavigator()
export default function Route() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerLeft:()=>(<S.LeftLogo source={require("./assets/images/logo.png")}/>),
        headerRight:()=>(
        <S.RightIcon>
          <Entypo name="menu" size={24} color="black" />
        </S.RightIcon>),
        
      }}>
        <Screen component={Home} name="Home" options={{title:""}}/>
        <Screen component={Detalhe} name="Detalhe" options={{title:""}}/>
      </Navigator>
    </NavigationContainer>
  );
}

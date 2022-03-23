import * as S from './styled'
import React, { useEffect,useState } from 'react'
import {Linking } from 'react-native'
import CardList from '../../Component/CardList/CardList';
import api from '../../service/api';

export default function Home() 
{ 
  const [categorias, setcategorias] = useState([])
  async function fetchData ()
  {
    const {data} = await api.get('categories')
    if(data){
      setcategorias(data)
    }    
  } 

  useEffect(() => fetchData(),[])
  
  return (
    <S.Container>
      <S.FlatListContainer>
        <S.FlatList
          data={categorias}
          keyExtractor={(item:any)=>String(item.id)}
          renderItem={({item})=><CardList item={item}/>}
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          bounces={false}
        />

      <S.Bottom>
            <S.Logo source={require('../../assets/images/logo-coursify-w.png')}/>
            <S.Message>
              O Coursify.me é uma plataforma de ensino a
              distância, onde qualquer pessoa ou empresa pode 
              construir seu EAD e vender cursos pela internet
            </S.Message>

            <S.Button activeOpacity={0.7}
              onPress={()=>Linking.openURL("https://coursify.me/")}
              >
              <S.Title>Quero conhecer a plataforma</S.Title>
            </S.Button>
      </S.Bottom>
      </S.FlatListContainer>
      
    </S.Container>
  )
}
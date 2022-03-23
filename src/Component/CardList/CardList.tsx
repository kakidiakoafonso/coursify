import * as S from './styled'
import React, { useState ,useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import Cards from '../Cards/Cards';
import api from '../../service/api';
import Spinner from '../Spinner/Spinner';

type Props = {
  item:any
}

export default function CardList({item}:Props) 
{
  const [posts, setPosts] = useState([])
  const [loading, setloading] = useState<boolean>(true)
  async function fetchData ()
  {
    const {data} = await api.get('posts')
    if(data)
      {
        setPosts(data) 
        setloading(false)
      }  
  } 

  useEffect(() => fetchData(),[]) 


  // if(loading)
  // {
  //   <Spinner/>
  // }
  return (
    <S.Container>
      <S.TitleMoreContainer>
        <S.Title>{item.name}</S.Title>
        <S.MoreContainer>
          <S.More>VER MAIS</S.More>
          <AntDesign name="caretright" size={14} color="black" />
        </S.MoreContainer>
      </S.TitleMoreContainer>

      <S.FlatList
        horizontal
        data={posts}
        keyExtractor={(item:any)=> String(item.id)}
        renderItem={({item})=><Cards item={item}/>}
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        bounces={false}
      />      
    </S.Container>
  )
}
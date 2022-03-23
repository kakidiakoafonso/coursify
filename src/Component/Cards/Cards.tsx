import * as S from './styled'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const SHADOW = {shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5}


type Props = {
    item:any
}
const defaultImage = "https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"
export default function Cards({item}:Props) 
{    
    const [imagem, setimagem] = useState(defaultImage)
    const navigation = useNavigation()
    async function getImage (){
        const {data} = await axios.get(`https://blog.coursify.me/wp-json/wp/v2/media/${item.featured_media}`)
        if(data)
            setimagem(data.guid.rendered)
        else
            setimagem(defaultImage)
    }

    useEffect(()=>getImage(),[])
    
  return (
    <S.Container style={SHADOW} activeOpacity={0.8} 
        onPress={()=>navigation.navigate("Detalhe", {
            postId: item.id
        })}
    >
        <S.Image source={{uri:imagem}}/>
        <S.TextContainer>
            <S.TitleContainer>
                <S.Title numberOfLines={2}>
                    {item.title.rendered}
                </S.Title>
            </S.TitleContainer>
            <S.MessageContainer>
                <S.Message numberOfLines={6}>
                    {item.excerpt.rendered.substring(3,100)}
                </S.Message>
            </S.MessageContainer>
            <S.MaisContainer>
                <S.TextMais>Leia mais</S.TextMais>
            </S.MaisContainer>
        </S.TextContainer>
    </S.Container>
  )
}
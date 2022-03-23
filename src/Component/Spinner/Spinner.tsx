import * as S from './styled'
import React from 'react'
import colors from '../../config/colors'

export default function Spinner() {
  return (
    <S.Container>
        <S.Loader size={'large'} color={colors.green}/>
    </S.Container>
  )
}
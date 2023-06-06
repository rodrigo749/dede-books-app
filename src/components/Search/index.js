import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { Livros } from './dataSearch'

const SearchContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
        `


function Search() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    
    console.log(livrosPesquisados);

  return (
    <SearchContainer>
      <Title>Já sabe por onde comecar</Title>
      <Subtitle>Encontre seu livre em nossa estante</Subtitle>
      <Input placeholder="Escreve a sua próxima leitura"
             onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = Livros.filter( livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)

             }}
    
      />
             
    </SearchContainer>
  );
}

export default Search;
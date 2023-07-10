import styled from 'styled-components/native'

import {
    Avatar,
    Button,
    Card,
    Text,
    Searchbar,
    useTheme,
} from 'react-native-paper'

export const ClubCard = styled(Card)`
    background-color: #fff;
    border-radius: 10px;
    margin: 5px;
    padding-left: 5px;
    padding-right: 5px;
    shadow-color: '#000';
    shadow-offset: 5px 5px;
    shadow-opacity: 0.15;
    shadow-radius: 3px;
    elevation: 5;
`
export const StyledButton = styled(Button)`
    shadow-color: #000;
    shadow-offset: 2px 2px;
    shadow-opacity: 0.15;
    shadow-radius: 3px;
    border-radius: 5px;
`
export const StyledCover = styled(Card.Cover)`
    background-color: none;
    margin-top: 5px;
    margin-bottom: 5px;
`
export const ListView = styled.View`
    flex: 1;
    background-color: #fff;
`
export const Scroller = styled.ScrollView`
    padding: 5px;
`
export const SearchView = styled.View`
    padding: 16px;
    ${'' /* background-color: #5fa8d3; */}
    background-color: #fff;
`
export const SearchInput = styled(Searchbar)`
    background-color: #e5e5e5;
    border-radius: 5px;
`

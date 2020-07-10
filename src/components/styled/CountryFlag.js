import styled from 'vue-styled-components'

const CountryFlag = styled('img', {
    size: {default: 'small'}
})`
    width: ${props => props.size === 'small' ? '100px' : '250px'};
    
`;

export default CountryFlag;

import styled from 'vue-styled-components';

const flexBox = styled('div', {
    justify: {
        default: 'initial'
    },
    align: {
        default: 'initial'
    },
    direction: {
        default: 'row'
    }
})`
        display: flex;
        justify-content: ${props => props.justify};
        align-items: ${props => props.align};
        flex-direction: ${props => props.direction};
`;

export default flexBox;

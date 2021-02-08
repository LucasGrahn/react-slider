import React, { useCallback, FunctionComponent } from 'react';
import styled, { StyledFunction } from 'styled-components'

interface Props {
    amount : number;
    activeIndex : number;
    onChangeFn : (index : number) => void;
}

interface BullPointProps {
    active : boolean;
}

const IndicatorContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const IndicatorBullPoint = styled.input<BullPointProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: black;
`;

const SliderIndicator : React.FC<Props> = ({ amount, activeIndex, onChangeFn }) => {
    return (
        <IndicatorContainer>
            <fieldset></fieldset>
        </IndicatorContainer>
    );
};

export default SliderIndicator;

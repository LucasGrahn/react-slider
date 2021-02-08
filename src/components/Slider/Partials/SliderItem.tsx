import React from 'react';
import styled from 'styled-components'
import { SliderItemProps as Props } from '../../../types/Slider';

const SliderItemContainer = styled.div<{ isActive : boolean }>`
    max-width: 800px;
    opacity: ${ props => props.isActive ? '1' : '0' };
`;

const SliderImage = styled.img<{ src: string, alt: string, isActive: boolean }>`
    position: relative;
    width: 100%;
    height: auto;
    z-index: -1;
    max-height: 450px;
    border-radius: 10px;
    transform: scale(${ props => props.isActive ? '1' : '0.95' });
    transition: ease 0.5s;
`;

const SliderLabel = styled.div<{ isActive : boolean }>`
    position: absolute;
    bottom: 10px;
    width: 100%;
    min-height: 30px;
    z-index: 5;
    color: white;
    text-align: center;
    opacity: ${ props => props.isActive ? '1' : '0' };
`;

const AbsoluteDiv = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
`;

const SliderItem : React.FC<Props> = ({ isActive, imageSrc, alt, label }) => {
    return (
        <SliderItemContainer isActive={isActive}>
            <AbsoluteDiv>
                <SliderImage src={imageSrc} alt={alt} isActive={isActive} />
                <SliderLabel isActive={isActive}>{ label }</SliderLabel>
            </AbsoluteDiv>
        </SliderItemContainer>
    );
};

export default SliderItem;

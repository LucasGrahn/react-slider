import React, { useState, useCallback } from 'react';
import SliderItem from './Partials/SliderItem';
import SliderIndicator from './Partials/SliderIndicator';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SliderProps as Props } from "../../types/Slider";

const StyledSlider = styled.div`
    width: 100%;
    border-radius: 10px;
    position: relative;
    height: 450px;
`;

const Button = styled.button<{ onClick :  (activeIndex : number,) => void | any}>`
    background-color: transparent;
    border-color: transparent;
    color: white;
    z-index: 10;
    cursor: pointer;
    height: 40px;
    width: 40px;
    padding: 4px;
`;

const Icon = styled(FontAwesomeIcon)<{ icon : any  }>`
    height: 20px;
    width: 20px !important;
`;

const ButtonBar = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 10;
    position: absolute;
    bottom: 45%;
    width: 95%;
    padding-left: 2.5%;
`;

const Slider : React.FC<Props> = ({ items}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    const goToNextSlide = useCallback((activeIndex) => {
        setActiveIndex((activeIndex !== items.length - 1) ? activeIndex + 1 : 0);
    }, [activeIndex]);

    const goToPreviousSlide = useCallback((activeIndex) => {
        setActiveIndex((activeIndex === 0) ? items.length - 1 : activeIndex - 1);
    }, [activeIndex]);

    const goToSlideByIndex = useCallback((index : number) => setActiveIndex(index), []);

    return (
        <StyledSlider>
            {
                items.map((item, index) => <SliderItem 
                    isActive={index === activeIndex} 
                    imageSrc={item.path} 
                    alt={item.alt} 
                    label={item.label}
                    key={index}
                />)
            }
            <ButtonBar>
                <Button onClick={() => goToPreviousSlide(activeIndex)}>
                    <Icon icon={faChevronLeft} />
                </Button>
                <Button onClick={() => goToNextSlide(activeIndex)}>
                    <Icon icon={faChevronRight} />
                </Button>
            </ButtonBar>
            <SliderIndicator amount={items.length} activeIndex={activeIndex} onChangeFn={goToSlideByIndex} />
        </StyledSlider>
    );
};

export default Slider;

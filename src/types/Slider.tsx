export interface SliderItem {
    path : string;
    label : string;
    alt : string;
}

export interface SliderItemProps {
    isActive : boolean;
    imageSrc : string;
    alt : string;
    label : string;
}

/**
 * Slider Props
 * @interface Props
 * @member {Array<SliderItem>} Contains a collection of Sliderimages including metadata
 * @member {Boolean} Determines if slides should automatically switch after a defined
 * @member {Number} Custom interval duration for the automatic slide feature
 */
export interface SliderProps {
    items: Array<SliderItem>;
}

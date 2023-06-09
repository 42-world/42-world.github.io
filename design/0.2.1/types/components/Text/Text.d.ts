type TextSize = 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body2' | 'small';
type TextWeight = 'regular' | 'medium' | 'semibold';
type TextAlign = 'left' | 'right' | 'center';
type Color = 'primary' | 'secondary' | 'tertiary' | 'white' | 'black' | 'red_100' | 'red_200' | 'red_300' | 'orange_100' | 'orange_200' | 'orange_300' | 'yellow_100' | 'yellow_200' | 'yellow_300' | 'lime_100' | 'lime_200' | 'lime_300' | 'green_100' | 'green_200' | 'green_300' | 'sky_100' | 'sky_200' | 'sky_300' | 'blue_100' | 'blue_200' | 'blue_300' | 'indigo_100' | 'indigo_200' | 'indigo_300';
type Props = {
    text: string;
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
    color?: Color;
};
export declare const textSizeConfig: Record<TextSize, string>;
export declare const textWeightConfig: Record<TextWeight, string>;
export declare const textAlignConfig: Record<TextAlign, string>;
export declare const textColorConfig: {
    light: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
        black: string;
        red_100: string;
        red_200: string;
        red_300: string;
        orange_100: string;
        orange_200: string;
        orange_300: string;
        yellow_100: string;
        yellow_200: string;
        yellow_300: string;
        lime_100: string;
        lime_200: string;
        lime_300: string;
        green_100: string;
        green_200: string;
        green_300: string;
        sky_100: string;
        sky_200: string;
        sky_300: string;
        blue_100: string;
        blue_200: string;
        blue_300: string;
        indigo_100: string;
        indigo_200: string;
        indigo_300: string;
    };
    dark: {
        primary: string;
        secondary: string;
        tertiary: string;
        white: string;
        black: string;
        red_100: string;
        red_200: string;
        red_300: string;
        orange_100: string;
        orange_200: string;
        orange_300: string;
        yellow_100: string;
        yellow_200: string;
        yellow_300: string;
        lime_100: string;
        lime_200: string;
        lime_300: string;
        green_100: string;
        green_200: string;
        green_300: string;
        sky_100: string;
        sky_200: string;
        sky_300: string;
        blue_100: string;
        blue_200: string;
        blue_300: string;
        indigo_100: string;
        indigo_200: string;
        indigo_300: string;
    };
};
export declare function Text({ text, size, weight, align, color }: Props): JSX.Element;
export {};
//# sourceMappingURL=Text.d.ts.map
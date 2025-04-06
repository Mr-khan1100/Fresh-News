
import { Dimensions, PixelRatio } from 'react-native';
const {width, height} = Dimensions.get('window');

const calWidth = widthSize => {
    let givenWidth =
      typeof widthSize === 'number' ? widthSize : parseFloat(widthSize);
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};
  
  const calHeight = heightSize => {
    let givenHeight =
      typeof heightSize === 'number' ? heightSize : parseFloat(heightSize);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

let vh = calHeight(1);
let vw = calWidth(1);

const COLORS = {
    placeholderTextColor : '#ccc',
    defaultBackground: '#FFFFFF',
    borderBottomColor: '#eee',
    emptyText:'#999',
    buttonBackground: '#4582e6',
    charcoal : '#2E2E2E',
    semiDarkText: '#4E4E4E',
    decriptionText: '#666',
    titleText: '#000000',
    primary: '#1E90FF',
    secondary: '#FF6347',
    text: '#000000',
    buttonText: '#FFFFFF',
    border: '#E0E0E0',
    green: '#82C341',
    grey: '#8E8E8E',
    mfgBlue: '#0076BD',
    defaultText : '#007CC3',
    deleteText : '#CD3030',
    headerBackground: '#FFFFFF',
    headerText: '#000000',
    headerBorder: '#E0E0E0',
    lavaGrey: '#6E6E6E',
    secondaryBackground: '#F5F5F5',
    yellow: 'yellow',
    tabIndicator: '#D12217',
};


const SPACING = {
    small: calWidth(2),
    medium: calWidth(4),
    large: calWidth(6),
    xs: calWidth(1),
    sm: calWidth(2),
    md: calWidth(3),
    lg: calWidth(4),
    xl: calWidth(5),
    extra: calWidth(10),
  };
  
export {
    calHeight,
    calWidth,
    COLORS,
    vh,
    vw,
    SPACING,
  };
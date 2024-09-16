import Typography from '@mui/material/Typography';
import { ReactNode, useEffect, useState } from 'react';

type ColorNumberMarkerProps = {
  value: number;
  formatter?: (n: number) => string | ReactNode;
  backgroundColor?: {
    normalColor?: string;
    lessColor?: string;
    greaterColor?: string;
  };
  valueColor?: {
    normalColor?: string;
    lessColor?: string;
    greaterColor?: string;
  };
};
const ColorNumberMarker = ({
  value,
  formatter,
  backgroundColor,
  valueColor
}: ColorNumberMarkerProps) => {
  const [textColor, setTextColor] = useState<string>(valueColor?.normalColor || 'black');
  const [textBackgroundColor, setTextBackgroundColor] = useState<string>(
    backgroundColor?.normalColor || 'white'
  );
  useEffect(() => {
    if (value < 0) {
      valueColor?.lessColor && setTextColor(valueColor.lessColor);
      backgroundColor?.lessColor && setTextBackgroundColor(backgroundColor.lessColor);
    } else if (value === 0) {
      valueColor?.normalColor && setTextColor(valueColor.normalColor);
      backgroundColor?.normalColor && setTextBackgroundColor(backgroundColor.normalColor);
    } else if (value > 0) {
      valueColor?.greaterColor && setTextColor(valueColor.greaterColor);
      backgroundColor?.greaterColor && setTextBackgroundColor(backgroundColor.greaterColor);
    }
  }, [value]);

  return (
    <Typography
      sx={{
        color: textColor,
        backgroundColor: textBackgroundColor,
        borderRadius: "4px",
        paddingLeft: "2px",
        paddingRight: "2px",
      }}
    >
      {formatter !== undefined ? formatter(value) : value.toFixed(2)}
    </Typography>
  );
};

export default ColorNumberMarker;

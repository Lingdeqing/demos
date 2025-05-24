// usage:
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         fontSize: dp(20), // no scaled
//         color: '#000',
//     },
// });
//
// const {scaledStyles} = useScaledStyles(styles);
//
// <View style={scaledStyles.container}>
//     <Text style={scaledStyles.text}>Hello World</Text>
// </View>

import { useMemo } from "react";
import { useWindowDimensions } from "react-native";
import { dp, RnStyleSheet, ScaleUtil, UI_DESIGN_WIDTH } from "@/utils/ScaleUtil";

function useScaledStyles<T extends RnStyleSheet>(
  stylesheet: T
): {
  scaledStyles: T;
  scaleUtil: ScaleUtil;
  px2dp: ScaleUtil["px2dp"];
  scaleStyles: ScaleUtil["scaleStyles"];
  scaleStyleSheet: ScaleUtil["scaleStyleSheet"];
} {
  const { width } = useWindowDimensions();
  const uiWidth = UI_DESIGN_WIDTH;
  const scaleUtil = ScaleUtil.getInstance(uiWidth, width);
  const scaledStyles = useMemo(() => {
    return scaleUtil.scaleStyleSheet(stylesheet);
  }, [stylesheet, scaleUtil]);
  return {
    scaleUtil,
    px2dp: scaleUtil.px2dp,
    scaleStyles: scaleUtil.scaleStyles,
    scaleStyleSheet: scaleUtil.scaleStyleSheet,
    scaledStyles
  };
}

export { useScaledStyles, dp };

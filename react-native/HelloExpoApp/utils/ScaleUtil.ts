import { Dimensions, ImageStyle, PixelRatio, StyleSheet, TextStyle, ViewStyle } from "react-native";

export type RnStyleSheet = ReturnType<typeof StyleSheet.create>;
type RnStyle = ViewStyle | TextStyle | ImageStyle;

const NOT_VALUE_PROPS = ["elevation", "zIndex", "flex", "opacity", "shadowOpacity", "fontWeight"];
export const UI_DESIGN_WIDTH = 390;

export class ScaleUtil {
  private constructor(
    public uiWidth = UI_DESIGN_WIDTH,
    public viewportWidth = Dimensions.get("window").width
  ) {}

  private static instanceMap = new Map<string, ScaleUtil>();

  static getInstance(uiWidth = 390, viewportWidth = Dimensions.get("window").width): ScaleUtil {
    const key = `${uiWidth}-${viewportWidth}`;
    if (!this.instanceMap.has(key)) {
      this.instanceMap.set(key, new ScaleUtil(uiWidth, viewportWidth));
    }
    return this.instanceMap.get(key)!;
  }

  px2dp = <T>(px: T, round = true): T => {
    if (px instanceof Number) {
      return px.valueOf() as T;
    }
    if (typeof px !== "number") {
      return px;
    }
    let dp = (px * this.viewportWidth) / this.uiWidth;
    if (round) {
      dp = PixelRatio.roundToNearestPixel(dp);
    }
    return dp as T;
  };

  scaleStyles = <T extends RnStyle>(styles: T, round = true): T => {
    const res = {} as T;
    for (let prop in styles) {
      if (NOT_VALUE_PROPS.includes(prop)) {
        res[prop] = styles[prop];
      } else if (prop === "shadowOffset") {
        //  shadowOffset
        // @ts-ignore
        res[prop] = this.scaleStyles(styles[prop], round);
      } else {
        res[prop] = this.px2dp(styles[prop], round);
      }
    }
    return res as T;
  };

  scaleStyleSheet = <T extends RnStyleSheet>(stylesheet: T, round = true): T => {
    const res: RnStyleSheet = {};
    for (let key in stylesheet) {
      res[key] = this.scaleStyles(stylesheet[key], round);
    }
    return res as T;
  };
}

export function dp(value: number): number {
  return new Number(value) as number;
}

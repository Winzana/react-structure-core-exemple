import React from "react";
import {Text as RNText} from "react-native";

const Text = ({children}) => (
    <RNText style={{color: "green"}}>{children}</RNText>
);
export default Text;
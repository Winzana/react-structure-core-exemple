import React from "react";

/**
 * Props for Button
 */
interface IProps {
  /**
   * Text to display in button
   */
  children: string;
}
export default ({ children }: IProps) => (
  <button
    style={{
      backgroundColor: "blue",
      border: "none",
      borderRadius: 13,
      color: "white",
      height: 50,
      paddingLeft: 25,
      paddingRight: 25,
    }}
  >
    {children}
  </button>
);

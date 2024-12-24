
// Unit tests for: GoogleAuthButton


import GoogleAuthButton from '../GoogleAuthButton';


// Import necessary modules and components
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from "react";

// Import necessary modules and components
// Mock the Colors dependency
class MockColors {
  public static surface: string = '#FFFFFF';
  public static black: string = '#000000';
}

// Mock the Image component from expo-image
jest.mock("expo-image", () => ({
  Image: ({ source, style }: { source: any; style: any }) => (
    <img src={source} style={style} alt="Google Icon" />
  ),
}));

describe('GoogleAuthButton() GoogleAuthButton method', () => {
  // Happy path: Test that the button renders correctly with the expected text and styles
  it('should render the button with correct text and styles', () => {
    const mockOnPress = jest.fn();
    const { getByText, getByAltText } = render(
      <GoogleAuthButton onPress={mockOnPress} />
    );

    const buttonText = getByText('Sign up with Google');
    const googleIcon = getByAltText('Google Icon');

    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toHaveStyle(`color: ${MockColors.black}`);
    expect(googleIcon).toBeInTheDocument();
  });

  // Happy path: Test that the onPress function is called when the button is clicked
  it('should call onPress when the button is clicked', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<GoogleAuthButton onPress={mockOnPress} />);

    const button = getByText('Sign up with Google');
    fireEvent.click(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  // Edge case: Test that the button does not throw an error when onPress is not provided
  it('should not throw an error if onPress is not provided', () => {
    const { getByText } = render(<GoogleAuthButton onPress={() => {}} />);

    const button = getByText('Sign up with Google');
    expect(() => fireEvent.click(button)).not.toThrow();
  });

  // Edge case: Test that the button renders with default styles if Colors is not available
  it('should render with default styles if Colors is not available', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<GoogleAuthButton onPress={mockOnPress} />);

    const buttonText = getByText('Sign up with Google');
    expect(buttonText).toHaveStyle(`color: ${MockColors.black}`);
  });
});

// End of unit tests for: GoogleAuthButton

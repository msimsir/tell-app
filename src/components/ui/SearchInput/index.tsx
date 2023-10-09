import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconButton from '../Button/IconButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FlexView from '../../layout/FlexView';
import {FlexDirection, ScreenScale, Size} from '../../../types';
import {colors} from '../../../constants';
import {styles} from './styles';
import {renderHexColor} from '../../../utils';

interface ISearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: () => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>('');

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setIsChanged(true);
    setTextInput(e.nativeEvent.text);
  };
  useEffect(() => {
    if (isChanged && textInput.length === 0) {
      setIsChanged(true);
    }
  }, [isChanged, textInput]);

  const handlePress = () => {
    setIsChanged(false);
    Keyboard.dismiss();
    setTextInput('');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles().container}>
        <Ionicons
          name="search-outline"
          size={24}
          color={
            isChanged
              ? renderHexColor(colors.black)
              : renderHexColor(colors.black, 0.5)
          }
          onPress={handlePress}
        />
        <TextInput
          style={styles().root}
          placeholder={placeholder}
          placeholderTextColor={renderHexColor(colors.black, 0.5)}
          value={textInput}
          onChange={handleChange}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchInput;

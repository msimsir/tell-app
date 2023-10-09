import React from 'react';
import {Text, View} from 'react-native';
import {colors, fonts} from '../../constants';
import Card from '../../components/ui/Card';
import FlexView from '../../components/layout/FlexView';
import {
  FlexDirection,
  FontSize,
  LayoutPosition,
  ScreenScale,
  Size,
} from '../../types';
import TextElement from '../../components/ui/TextElement';
import SearchInput from '../../components/ui/SearchInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollableView from '../../components/layout/ScrollableView';
import Panel from '../../components/ui/Panel';
import {renderHexColor} from '../../utils';

const HomeScreen = () => {
  return (
    <FlexView
      gap={Size.Small}
      flex={1}
      direction={FlexDirection.Column}
      paddingTop={Size.Medium}
      paddingVertical={Size.None}
      paddingHorizontal={Size.Medium}
      backgroundColor={renderHexColor(colors.purple, 0.4)}>
      <SearchInput placeholder="Search list title" />

      <ScrollableView>
        <ScrollableView isHorizontal>
          <Card>
            <Text>Card1</Text>
          </Card>
          <Card>
            <Text>Card2</Text>
          </Card>
          <Card>
            <Text>Card3</Text>
          </Card>
          <Card>
            <Text>Card4</Text>
          </Card>
        </ScrollableView>
        <FlexView
          gap={Size.None}
          paddingBottom={Size.Large}
          direction={FlexDirection.Column}
          paddingHorizontal={Size.None}>
          <TextElement fontSize={FontSize.SubTitle}>
            Grammar Workbook
          </TextElement>
          <Panel />
        </FlexView>
        <FlexView
          gap={Size.None}
          paddingBottom={Size.Large}
          direction={FlexDirection.Column}
          paddingHorizontal={Size.None}>
          <TextElement fontSize={FontSize.SubTitle}>
            Short Stories You've Written
          </TextElement>
          <Panel />
        </FlexView>
        <FlexView
          gap={Size.None}
          paddingBottom={Size.Large}
          paddingTop={Size.Large}
          direction={FlexDirection.Column}
          paddingHorizontal={Size.None}>
          <TextElement fontSize={FontSize.SubTitle}>Score</TextElement>
          <Panel />
        </FlexView>
      </ScrollableView>
    </FlexView>
  );
};

export default HomeScreen;

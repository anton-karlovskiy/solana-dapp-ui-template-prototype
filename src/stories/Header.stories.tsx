
import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import { Header } from 'stories/Header';

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe'
  }
};

const LoggedOut = Template.bind({});
LoggedOut.args = {};

export {
  LoggedIn,
  LoggedOut
};

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Header>;

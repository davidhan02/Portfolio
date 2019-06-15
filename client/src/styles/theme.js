const constants = {
  error: '#f5222d',
  icon: '#b6b6b6',
  addIcon: '#f9920b',
  delIcon: '#2e70ff'
};

const dark = {
  ...constants,
  normalText: '#ffffff',
  mutedText: '#b0b8bf',
  border: '#333333',
  accent: '#33a0ff',
  pageBackground: '#1b1b1b',
  iconHover: '#383838',
  foreground: '#262626',
  activeBackground: '#333333',
  inputBackground: '#212121',
  shadow: 'rgba(0, 0, 0, 0.4)'
};

const light = {
  ...constants,
  normalText: '#454f5b',
  mutedText: '#818e99',
  border: '#ebedf0',
  accent: '#1890ff',
  pageBackground: '#f4f6f8',
  iconHover: '#f2f2f2',
  foreground: '#ffffff',
  activeBackground: '#f0f0f0',
  inputBackground: '#fcfcfc',
  shadow: 'rgba(0, 0, 0, 0.05)'
};

const theme = isDark => (isDark ? dark : light);

export default theme;

export default function () {
  const computedColor = (color: string, mode = '') => {
    switch (mode) {
      case 'flat':
        return `text-${color}-700 bg-cool-white`;
      case 'outline':
        return `text-${color}-700 bg-white border border-solid border-${color}-700`;
      default:
        return `bg-${color}-700 text-cool-white`;
    }
  };
  const computedColorWithHover = (color: string, mode = '') => {
    switch (mode) {
      case 'flat':
        return `text-${color}-700 hover:text-${color}-500 bg-cool-white hover:bg-white`;
      case 'outline':
        return `text-${color}-700 hover:border-${color}-500 hover:text-${color}-500 bg-white hover:bg-cool-white border border-solid border-${color}-700`;
      default:
        return `bg-${color}-700 hover:bg-${color}-500 text-cool-white hover:text-white`;
    }
  };
  const computedColorIcon = (color: string, mode = '') => {
    switch (mode) {
      case 'flat':
        return color;
      case 'outline':
        return color;
      default:
        return 'white';
    }
  };

  return {
    computedColor,
    computedColorWithHover,
    computedColorIcon,
  };
}

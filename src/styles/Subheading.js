import styled from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fontSizes, fonts } = theme;

const Subheading = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 10px;
  width: 100%;
  white-space: nowrap;
  font-size: 25px;
  ${media.tablet`font-size: 24px;`};

  &:before {
    margin-right: 10px;
    font-family: ${fonts.SFMono};
    font-weight: normal;
    color: ${colors.green};
    font-size: ${fontSizes.xl};
    position: relative;
    bottom: 4px;
    ${media.tablet`font-size: ${fontSizes.lg};`};
  }

  &:after {
  }
`;

export default Subheading;

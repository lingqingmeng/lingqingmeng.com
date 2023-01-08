import styled from 'styled-components';

const ModalStyle = styled.div`
  position: fixed;
  max-width: 50%;
  height: 70%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  display: inline-block;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: auto;
  z-index: 99 !important;
`;

export default ModalStyle;

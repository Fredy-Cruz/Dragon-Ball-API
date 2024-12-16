import styled from 'styled-components';

export const Loading = () => {
  return (
    <StyledWrapper>
      <div className="custom-loader" />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .custom-loader {
    width: 70px;
    height: 70px;
    background: #ffa600;
    border-radius: 50px;
    -webkit-mask: radial-gradient(circle 31px at 50% calc(100% + 13px),#000 95%,#0000) top 4px left 50%,
      radial-gradient(circle 31px,#000 95%,#0000) center,
      radial-gradient(circle 31px at 50% -13px,#000 95%,#0000) bottom 4px left 50%,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    -webkit-mask-repeat: no-repeat;
    animation: cu10 1.5s infinite;
  }

  @keyframes cu10 {
    0% {
      -webkit-mask-size: 0    18px,0    18px,0    18px,auto
    }

    16.67% {
      -webkit-mask-size: 100% 18px,0    18px,0    18px,auto
    }

    33.33% {
      -webkit-mask-size: 100% 18px,100% 18px,0    18px,auto
    }

    50% {
      -webkit-mask-size: 100% 18px,100% 18px,100% 18px,auto
    }

    66.67% {
      -webkit-mask-size: 0    18px,100% 18px,100% 18px,auto
    }

    83.33% {
      -webkit-mask-size: 0    18px,0    18px,100% 18px,auto
    }

    100% {
      -webkit-mask-size: 0    18px,0    18px,0    18px,auto
    }
  }`;

export default Loading;


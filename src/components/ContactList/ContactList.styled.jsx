import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  padding-left: 40px;
  max-width: 550px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  li {
    /* background-color: #111111; */
    display: flex;
    justify-content: space-between;
    /* padding-bottom: 20px; */
    p {
      text-transform: capitalize;
      color: rgb(30 17 226);
      text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
        1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
        1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
        1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
        1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
        1px 30px 60px rgba(16, 16, 16, 0.4) !important;
      font-size: 24px;
    }

    button {
      --c: #fff;

      background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%)
          var(--_p, 100%) / 300% no-repeat,
        #e97f02;
        cursor: pointer;
      color: #0000;
      border: none;
      transform: perspective(500px) rotateY(calc(20deg * var(--_i, -1)));
      text-shadow: calc(var(--_i, -1) * 0.08em) -0.01em 0 var(--c),
        calc(var(--_i, -1) * -0.08em) 0.01em 2px #0004;
      outline-offset: 0.1em;
      transition: 0.3s;
      &:hover,
      &:focus-visible {
        --_p: 0%;
        --_i: 1;
      }
    }
  }

  li:not(:last-child) {
    margin-bottom: 20px;
  }
`;

type Props = JSX.IntrinsicElements["svg"];

const ChevronLeft = (props: Props) => (
  <svg
    {...props}
    fill="none"
    height="14"
    viewBox="0 0 8 14"
    width="8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1L1 7L7 13"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default ChevronLeft;

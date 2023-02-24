export const ArrowSvg = ({ rotate }) => {
  return (
    <svg
      style={{
        transform: `rotate(${rotate ? 90 : 0}deg)`,
        marginLeft: "auto",
        transition: "300ms",
      }}
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.93928 5.72504L1.64639 0.432146L0.232177 1.84636L6.93928 8.55347L13.6464 1.84636L12.2322 0.432146L6.93928 5.72504Z"
        fill="black"
      ></path>
    </svg>
  );
};

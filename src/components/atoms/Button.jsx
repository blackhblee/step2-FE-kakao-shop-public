/** 버튼
 *
 * @param {function} onClick - 버튼 클릭 시 실행할 함수
 * @param {React.ReactNode} children - 버튼에 쓰일 내용
 * @param {string} className - 버튼에 적용할 스타일
 * @return {JSX.Element}
 */
const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

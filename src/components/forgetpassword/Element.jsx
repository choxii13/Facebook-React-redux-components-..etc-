export default function Element({
  placeholder,
  onClick,
  error,
  button,
  title,
  type,
  ...props
}) {
  return (
    <div className="change-password">
      {title && <p>{title}</p>}
      <input className="design" placeholder={placeholder} {...props} />
      <p className="active"> {error} </p>
      {button && (
        <button type={type} className="design" onClick={onClick}>
          {button}
        </button>
      )}
    </div>
  );
}

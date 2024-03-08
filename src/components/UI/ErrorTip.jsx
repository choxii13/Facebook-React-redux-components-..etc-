export default function ErrorTip({ className, content, ...props }) {
  return (
    <p className={`error-tip ${className}`} {...props}>
      {content}
    </p>
  );
}

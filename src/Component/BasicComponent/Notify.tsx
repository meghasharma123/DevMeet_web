export default function Notify({ msg }: { msg: string }) {
  return (
    <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>{msg}</span>
      </div>
    </div>
  );
}

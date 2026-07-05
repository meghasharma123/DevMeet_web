
interface Props {
  ele: {
    firstName: string;
    photoUrl: string;
    about: string;
  };
}

export default function UserCad({ ele }: Props) {
  const { firstName, photoUrl, about } = ele;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt={firstName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Like</button>
        </div>
      </div>
    </div>
  );
}

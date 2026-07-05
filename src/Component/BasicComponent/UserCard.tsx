import { UserType } from "../../types/User";

interface Props {
  ele: UserType;
}

export default function UserCad({ ele }: Props) {
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={ele.photoUrl} alt={ele.firstName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ele.firstName}</h2>
        <p>{ele.about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Like</button>
        </div>
      </div>
    </div>
  );
}

export default function LoadUser( { userInfo }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={userInfo.image}
          className="w-full h-48 object-cover"
          alt={userInfo.firstName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{userInfo.firstName} {userInfo.lastName}</h2>
        <p>
          {userInfo.email}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

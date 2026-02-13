import { useEffect, useState } from "react";
import LoadUser from "./LoadUser";

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);

  console.log(user);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {user.map((user) => (
        <LoadUser key={user.id} userInfo={user} />
      ))}
    </div>
  );
}

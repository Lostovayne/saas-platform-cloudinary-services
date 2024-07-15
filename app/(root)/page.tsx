import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <p>Hello</p>
      <UserButton />
    </div>
  );
}

export default page;
import { SignUp } from '@clerk/nextjs';

function Page() {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignUp />;
    </div>
  );
}

export default Page;

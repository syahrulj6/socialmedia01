import { SignIn } from '@clerk/nextjs';

function Page() {
  return (
    <div className="flex justify-center h-screen items-center">
      <SignIn />;
    </div>
  );
}

export default Page;

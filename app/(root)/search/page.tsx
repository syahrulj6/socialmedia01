import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchUsers } from '@/lib/actions/user.actions';
import ProfileHeader from '@/components/shared/ProfileHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { profileTabs } from '@/constant';
import ThreadsTab from '@/components/shared/ThreadsTab';
import UserCard from '@/components/cards/UserCard';

const Page = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser();

  if (!user) return null;

  const result = await fetchUsers({
    userId: user.id,
    searchString: '',
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>

      {/* Search Bar  */}

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="no-result">No users</p>
        ) : (
          <>
            {result.users.map((user) => (
              <UserCard key={user.id} id={user.id} name={user.name} username={user.username} imgUrl={user.image} personType="User" />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Page;

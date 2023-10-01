'use client';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { usePathname, useRouter } from 'next/navigation';

import { commentValidation } from '../../lib/validations/thread';
import Image from 'next/image';
import { addCommentToThread } from '@/lib/actions/thread.actions';
// import { createThread } from '@/lib/actions/thread.actions';

interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(commentValidation),
    defaultValues: {
      thread: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof commentValidation>) => {
    await addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname);

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 w-full">
              <FormLabel>
                <Image src={currentUserImg} alt="current user" width={48} height={48} className="rounded-full object-cover" />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input type="text" {...field} placeholder="Add comment..." className="no-focus text-light-1 outline-none" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="comment-form_btn">
          Reply
        </Button>
      </form>
    </Form>
  );
};

export default Comment;

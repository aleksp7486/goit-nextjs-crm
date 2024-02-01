// import AddCompanyButton from '@/app/components/add-company-button';
import dynamic from 'next/dynamic';
import MagicButton from '@/app/components/magic-button';

const AddCompanyButton = dynamic(
  () => import('@/app/components/add-company-button'),
  {
    ssr: false,
  },
);
export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}

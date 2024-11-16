import Hero from '@/app/components/Hero';
import Blogs from '@/app/components/Blogs';
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-background">
            <Hero />
            <Blogs />
        </main>
    </div>
  );
}

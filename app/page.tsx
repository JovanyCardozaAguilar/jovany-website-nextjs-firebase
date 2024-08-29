import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-xl text-center">Home Page</h1>
      <div className='mt-4 flex justify-center'>
        <img src='img-self.jpg' alt='Image of myself' className='w-64 h-auto'></img>
      </div>
      <h1 className="mt-4 text-center">A website that contains information on Jovany Cardoza-Aguilar's project, publications, and resume. </h1>
    </main>

  );
}

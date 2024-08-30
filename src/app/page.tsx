function Header() {
  return (
    <div className='px-8 py-4'>
      <a className='font-medium text-xl' href='/'>
        nbaron
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <section className='mx-8 md:mx-auto sm:mx-24 md:max-w-[700px] flex flex-col gap-3'>
        <p>
          Hi, I{"'"}m Noah! I{"'"}m a software engineer and designer. I like to
          build things that are fun, useful, and make the world a better place
        </p>
        <div className='flex flex-col gap-1'>
          <h3 className='font-bold'>Projects:</h3>
          <ul className='list-disc pl-8'>
            <li>
              A website you can only visit once:{' '}
              <a
                className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
                href='https://onlyvisitonce.com'
                target='_blank'
              >
                onlyvisitonce.com
              </a>
            </li>
            <li>More coming soon...</li>
          </ul>
        </div>

        <p>
          enjoy my work?{' '}
          <a
            className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
            href='https://buymeacoffee.com/noahbaron'
            target='_blank'
          >
            buy me a coffee!
          </a>
        </p>
      </section>
    </main>
  );
}

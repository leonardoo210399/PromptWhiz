import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <p
      style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '0.68rem',
        color: 'var(--accent)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginTop: '0.5rem',
        marginBottom: '1.5rem',
        opacity: 0.85,
      }}
    >
      ↳ open prompt archive
    </p>

    <h1 className='head_text text-center'>
      Discover &amp; Share
      <br />
      <span className='orange_gradient'>AI Prompts</span>
    </h1>

    <p className='desc text-center'>
      An open-source library of AI prompts — discover,
      contribute &amp; copy prompts that actually work.
    </p>

    <Feed />
  </section>
);

export default Home;

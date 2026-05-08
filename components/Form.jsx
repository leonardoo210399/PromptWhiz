import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Prompt</span>
      </h1>
      <p className='desc text-left' style={{ maxWidth: '440px' }}>
        {type} and share AI prompts with the community — let your
        imagination run wild on any AI platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-6 glassmorphism'
      >
        <label>
          <span
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              display: 'block',
              marginBottom: '0.25rem',
            }}
          >
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your prompt here...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              display: 'block',
              marginBottom: '0.25rem',
            }}
          >
            Tag{' '}
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 400,
                textTransform: 'none',
                letterSpacing: '0.02em',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
              }}
            >
              (#product, #webdev, #idea…)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex items-center justify-end gap-5 mx-1 pb-1'>
          <Link
            href='/'
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              transition: 'color 0.12s',
            }}
          >
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='black_btn'
            style={{ opacity: submitting ? 0.6 : 1 }}
          >
            {submitting ? `${type}ing…` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

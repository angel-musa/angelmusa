// app/interests/page.tsx
export default function InterestsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Interests</h1>
        <p className="text-[var(--muted)]">Stuff I actually think about.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-5">
        <div className="card p-6 md:p-8">
          <h3 className="text-xl font-semibold">Currently</h3>
          <div className="mt-4 space-y-2 text-[var(--muted)]">
            <p><span className="text-white/90">Reading:</span> (add)</p>
            <p><span className="text-white/90">Learning:</span> (add languages)</p>
            <p><span className="text-white/90">Watching:</span> (add)</p>
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <h3 className="text-xl font-semibold">Fashion</h3>
          <div className="mt-4 space-y-2 text-[var(--muted)]">
            <p><span className="text-white/90">Style:</span> dark neutrals, clean silhouettes, small details.</p>
            <p><span className="text-white/90">Notes:</span> (brands / pieces you like)</p>
            <p><span className="text-white/90">Moodboard:</span> (optional link later)</p>
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <h3 className="text-xl font-semibold">Languages</h3>
          <div className="mt-4 space-y-2 text-[var(--muted)]">
            <p><span className="text-white/90">German:</span> pronunciation + listening practice.</p>
            <p><span className="text-white/90">Next:</span> (add)</p>
          </div>
        </div>

        <div className="card p-6 md:p-8">
          <h3 className="text-xl font-semibold">Other</h3>
          <div className="mt-4 space-y-2 text-[var(--muted)]">
            <p>City walks, cafés, playlists, and building side projects that shouldn’t exist (but do).</p>
          </div>
        </div>
      </section>
    </div>
  );
}

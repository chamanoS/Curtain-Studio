import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-20">
      <div className="max-w-xl rounded-2xl border border-black/5 bg-white/60 shadow-soft p-8">
        <div className="text-sm text-black/60">404</div>
        <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-black/70">The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-xl bg-ink px-5 py-3 text-paper shadow-soft">
          Back home
        </Link>
      </div>
    </div>
  );
}

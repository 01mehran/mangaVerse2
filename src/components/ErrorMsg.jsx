export default function ErrorMsg({ error }) {
  return (
    <div className="bg-bg dark:bg-bg-dark flex h-screen flex-col items-center pt-24">
      <div className="text-danger mb-3 text-5xl">⚠️</div>

      <h2 className="dark:text-text-dark text-xl font-semibold">
        Failed to load manga
      </h2>

      <p className="text-danger mt-2 font-medium">{error || error.status}</p>
    </div>
  );
}

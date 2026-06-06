export default function ErrorMsg({ error, onRetry }) {
  return (
    <div className="bg-bg dark:bg-bg-dark flex h-screen flex-col items-center pt-24">
      <div className="text-danger mb-3 text-5xl">⚠️</div>

      <h2 className="dark:text-text-dark text-xl font-semibold">
        Failed to load manga
      </h2>

      <p className="text-danger mt-2 font-medium">{error || error.status}</p>

      <button
        onClick={onRetry}
        className="border-primary/30 bg-primary/10 text-primary dark:border-primary-dark/20 dark:bg-primary-dark/10 dark:text-primary-dark mt-2 cursor-pointer rounded-lg border p-1 px-6"
      >
        Refresh
      </button>
    </div>
  );
}

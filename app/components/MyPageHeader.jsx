export default function MyPageHeader() {
  return (
    <header className="flex items-center justify-between bg-white shadow-md rounded-2xl px-6 py-3 w-full max-w-md mx-auto mt-10">
      <h1 className="text-lg font-semibold">マイページ</h1>
      <img
        src="/path/to/avatar.png"
        alt="User"
        className="w-8 h-8 rounded-full"
      />
    </header>
  );
}
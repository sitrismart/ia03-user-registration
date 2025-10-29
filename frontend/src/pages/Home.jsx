export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
        <h1 className="text-2xl font-bold text-indigo-700 mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-gray-600">
          This is a simple user registration system built with <b>React</b> & <b>NestJS</b>.
        </p>
      </div>
    </div>
  );
}

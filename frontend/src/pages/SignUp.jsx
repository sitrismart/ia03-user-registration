import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setTimeout(() => navigate('/login'), 1200);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
          Create a New Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={mutation.isLoading}
            className={`w-full py-3 text-white font-semibold rounded-xl transition-all duration-300 ${
              mutation.isLoading
                ? 'bg-indigo-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {mutation.isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {mutation.isSuccess && (
          <p className="text-green-600 text-center mt-3 font-medium">
            Registration successful! Redirecting...
          </p>
        )}
        {mutation.isError && (
          <p className="text-red-600 text-center mt-3 font-medium">
            Error: {mutation.error.response?.data?.message || mutation.error.message}
          </p>
        )}

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-700 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
